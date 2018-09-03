function serviceController() {}
var callMS = require('../services/callMicroservice')
var dbwrite = require('../services/writeData')
var dbread = require('../services/readData')

serviceController.prototype.serviceInvoke = async function (item) {
    var output = await callMS.callMicroservice()
   
    console.log(await dbread.readData());
    /*.then ( results => {
      console.log('2nd in then');
    })

    /*return await dbread.readData()
    .then( results => {
      console.log('got here 2');
      console.log('result of promise back in controller'+results);
    })*/
  }

module.exports = serviceController;