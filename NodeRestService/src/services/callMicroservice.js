var axios = require('axios')

module.exports = {
  callMicroservice: async function (microserviceParam) {
    let URL = 'localhost:3001/myapi';
    return axios
      .get(`http://${URL}`)
      .then(response => {

        var outputmessage = response.data;
        return outputmessage;
      })
      .catch( (err) => {
        throw new Error(err)
        console.log('missed');
      })
  }
}