var request = require('request');


//test('the data is peanut butter', done => { // funciona igual.
test('the data is peanut butter', function (done) {

  // Don't do this!
  const options = {
    method: 'GET',
    url: 'https://www.falabella.com/rest/model/atg/userprofiling/ProfileActor/fetchSessionInfo',
    headers: {
      'Content-Type': 'application/json',
      'User-Agent': 'Amanda'
    }
  }
  function callback(data) {
    let _data = JSON.parse(data);
    //console.log(_data);
    //expect(data.errors).toEqual(200);
    //&expect(data.success).toBeFalsy();
    expect(_data.errors).toBeFalsy();
    expect(_data.success).toBeFalsy();
    done();
  }
  request(options, function (error, response, body) {

    callback(JSON.stringify(body));
    // callback({
    //   "errors": [],
    //   "state": {
    //   "sessionConfirmationNumber": "1499257144947246069",
    //   "cartQuantity": 0
    //   },
    //   "success": false
    //   });
  });
});