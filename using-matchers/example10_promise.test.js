var request = require('request');

function testFunction() {
  const options = {
    method: 'GET',
    url: 'https://www.falabella.com/rest/model/atg/userprofiling/ProfileActor/fetchSessionInfo',
    headers: {
      'Content-Type': 'application/json',
      'User-Agent': 'Amanda'
    }
  }
  // return {
  //   "errors": [],
  //   "state": {
  //   "sessionConfirmationNumber": "-7580136303716076395",
  //   "cartQuantity": 0
  //   },
  //   "success": true
  //   }
  return new Promise((resolve, reject) => {
    request(options, (err, res, body) => {
      if (err) {
        reject(err)
      }
      let bodyParseado = JSON.parse(body);
      resolve(!bodyParseado.success); //return //"true"
    })
  })
}

test('error en servicio catch ', () => {  
  // return expect(testFunction()).resolves.toBe('peanut butter');
  return expect(testFunction()).resolves.not.toBe("true");
});
