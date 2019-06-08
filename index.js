const express = require('express')
const app = express()
const port = 3000

app.listen(port, () => console.log('listening on port', port))

app.use(express.static('static'))

app.get('/', (req, res) => {
    res.sendFile('static/index.html')
})
