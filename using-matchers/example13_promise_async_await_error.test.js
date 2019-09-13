var request = require('request');

async function testFunction() {
  const options = {
    method: 'GET',
    url: '3https://www.falabella.com/rest/model/atg/userprofiling/ProfileActor/fetchSessionInfo',
    headers: {
      'Content-Type': 'application/json',
      'User-Agent': 'Amanda'
    }
  }
  return new Promise((resolve, reject) => {
    request(options, (err, res, body) => {
      if (err) {
        reject('Service-error');
      }
      let bodyParseado = JSON.parse(body);
      resolve(!bodyParseado.success);
    })
  })
}

test('the fetch fails with an error', async () => {
  expect.assertions(1);
  try {
    await testFunction();
  } catch (e) {
    expect(e).toMatch('Service-error');
  }
});