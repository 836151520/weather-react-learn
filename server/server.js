let http = require('http')
let fs = require('fs')
let url = require('url')
let mime = require('mime')

http.createServer(function (request, response) {
    console.log(request.url)
    let urlObj = url.parse(request.url)
    let path = urlObj.pathname === '/'
        ? `.${urlObj.pathname}index.html`
        : `.${urlObj.pathname}`
    let contentType = mime.getType(path)

    console.log(request.url,'----',path);

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
}).listen(3001)


function write404(response) {
    response.writeHead(404, {'Content-Type': 'text/html'})
    response.write("404 Not Found")
}