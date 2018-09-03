// contents of src/app2.js
const express = require('express')
const app = express()
const callMS = require('./services/callMicroservice')

app.get('/myapi', (request, response) => {
    console.log('hit me');
    response.send('you hit app 2')
})
app.listen(3001, () => console.log('App2 is listening on port 3001'))