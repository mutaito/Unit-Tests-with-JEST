var request = require('request');

async function testFunction() {
  const options = {
    method: 'GET',
    url: '33333https://www.falabella.com/rest/model/atg/userprofiling/ProfileActor/fetchSessionInfo',
    headers: {
      'Content-Type': 'application/json',
      'User-Agent': 'Amanda'
    }
  }
  return new Promise((resolve, reject) => {
    request(options, (err, res, body) => {
      if (err) {
        reject('error');
      }
      // let bodyParseado = JSON.parse(body);
      // resolve(!bodyParseado.success);
    })
  })
}

test('The function fail and return error string (error)', async () => {
  await expect(testFunction()).rejects.toMatch('error');
});
