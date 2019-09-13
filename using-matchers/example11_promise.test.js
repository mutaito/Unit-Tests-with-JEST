var request = require('request');

function testFunction() {
  const options = {
    method: 'GET',
    url: 'https://333www.falabella.com/rest/model/atg/userprofiling/ProfileActor/fetchSessionInfo',
    headers: {
      'Content-Type': 'application/json',
      'User-Agent': 'Amanda'
    }
  }
  return new Promise((resolve, reject) => {
    request(options, (err, res, body) => {
      if (err) {
        reject('error-database');
      }
    })
  })
}

test(' 1 -> fails with an error', () => {
  return expect(testFunction()).rejects.toMatch('error-database');
});

//When function return error 'error-database' fail, because string is different.
// test(' 2 -> fails with an error', () => {
//   return expect(testFunction()).rejects.toMatch('Other-Error');
// });