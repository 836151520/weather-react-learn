let http = require('http')
let fs = require('fs')
let url = require('url')
let mime = require('mime')
let queryString = require('querystring')
let findCity = require('./findCity')

http.createServer(function (request, response) {
    console.log(request.url)
    let urlObj = url.parse(request.url)
    let path = urlObj.pathname === '/'
        ? `.${urlObj.pathname}index.html`
        : `.${urlObj.pathname}`
    let query = urlObj.query

    if (query) {
        query = queryString.parse(query)
        if (request.method === 'GET') {
            response.writeHead(200, {
                'Content-Type': 'text/plain',
                'Access-Control-Allow-Origin': '*'
            })
            findCity(query, function (citys) {
                response.write(JSON.stringify((citys)))
                response.end()
            })
        }
    } else {
        let contentType = mime.getType(path)
        if (contentType) {
            fs.readFile(path, function (err, bytes) {
                if (err) {
                    write404(response)
                }
                else {
                    response.writeHead(200, {'Content-Type': contentType})
                    response.write(bytes)
                }
                response.end()
            })
        } else {
            write404(response)
            response.end()
        }
    }
}).listen(3001)


function write404(response) {
    response.writeHead(404, {'Content-Type': 'text/html'})
    response.write("<html>\
            <body>\
            <p>can not find the page!<p>\
            </body>\
            </html>")
}