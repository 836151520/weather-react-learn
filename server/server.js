let http = require('http')
let fs = require('fs')
let url = require('url')
let mime = require('mime')

http.createServer(function (request, response) {
    console.log(request.url)
    let urlObj = url.parse(request.url)
    let path = urlObj.pathname === '/'
        ? `../build/${urlObj.pathname}index.html`
        : `../build/${urlObj.pathname}`
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
}).listen(3001)


function write404(response) {
    response.writeHead(404, {'Content-Type': 'text/html'})
    response.write("页面找不到了")
}