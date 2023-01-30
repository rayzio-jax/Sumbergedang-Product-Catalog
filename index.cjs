const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')

app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/post', (req, res) => {
    console.log({ requestFromOutside: req.body })
    res.send('data updated')
})

app.put('/data', (req, res) => {
    console.log({ updateData: req.body })
    res.send('data updated')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})