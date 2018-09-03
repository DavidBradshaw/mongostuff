// contents of src/app.js
const express = require('express')
const app = express()
const sc = require('./controllers/serviceControler')

var callMS = require('./services/callMicroservice')

app.get('/myapi', (request, response) => {
    let ctrl = new sc()

ctrl
    .serviceInvoke()  //invokes function
    .then( result => {   //waits for response and then whatever is return is loaded into the variable (in this case called result).  => then invokes following function
      response.send(result)
      console.log('first');
      return ('this now');
    })
    .then( result => {  // this line is just there to prove what is going on, previous function returned 'this now' which is then passed to next then statement
        console.log(result);
    })
    .catch(error => {
      response.status(500).send({ error: error.message })
    })
})

app.listen(3000, () => console.log('App1 is listening on port 3000'))