var request = require('request');
const options = {
  method: 'GET',
  url: 'https://www.falabella.comm/rest/model/atg/userprofiling/ProfileActor/fetchSessionInfo',
  headers: {
    'Content-Type': 'application/json',
    'User-Agent': 'Amanda'
  }
}

function testFunction(){
  return  new Promise((resolve, reject) => {
    request(options, (err, res, body) => {
      reject("error-503");
      // if (err) {
      //   reject(err)
      // }
      // resolve(JSON.stringify(body))
    })
  })
}

test('error en servicio catch ', () => {
    return testFunction().catch((e) => {
      console.log("---------<e");
      console.log(e);
      console.log("---------<e");
    expect(e).toMatch(/error-503/);
  });
});
//Error:>
// Received has value: [Error: getaddrinfo ENOTFOUND www.falabella.comm www.falabella.comm:443]

// 30 |       console.log("e···········")
// 31 |     console.log(e)
// > 32 |     expect(e).toMatch('error');
//    |               ^
// 33 |   });
// 34 | });