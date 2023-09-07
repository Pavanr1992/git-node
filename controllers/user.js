const request = require('request');

const { winstonLogger } = require("../utils/logger");



const getToken = async(req,res)=>{
    var options = {
        'method': 'GET',
        'url': 'https://test-connect.pnbmetlife.com/v1/token-wa',
        'headers': {
          'Content-Type': 'application/json',
          'X-IBM-Client-Id': '2a382617-61d7-4922-940e-8f53f37bf487',
          'X-IBM-Client-Secret': 'H6cB2vC8nT5uA0vH0nU3nY7kA1jU3aG4xY4iP5fT3gV5iR5rN6',
          'mettype': 'other',
          'subject': 'Customer Services'
        }
      };
      return new Promise((resolve,reject)=>{
        request(options, function (error, response) {
        if (error) reject(error)
        else{
          winstonLogger.info(
            `${new Date} | reqid | logname | env | apiUTRUpdate | urn: urn`
          );
        resolve(JSON.parse(response.body))}
      
      });
    })

}

// getToken()
// .then((response)=>{
//     console.log(response)
// })
// .catch((error)=>{
//     console.log(error)
// })

const getStatus = async(req,res)=>{
   
    var token = await getToken()
     res.status(200).json({"message":token})
}

module.exports = { getStatus}