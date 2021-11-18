const http = require('http')

const server = http.createServer((req, res) => {
    console.log(req.url)

    res.write('<h1>Hi world I like potato chips!!!;)</h1>')

    res.end(`
        <div style="background: blue; width: 1px; height: 200px;">
            <img src="webserver/img/tomato.jpg" width="400" height="300">
            <hr>
        </div>
    `)
})

server.listen(3002, () => {
    console.log('Server is running...')
})