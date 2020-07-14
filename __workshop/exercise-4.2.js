const request = require('request-promise');

const getTronaldDumpQuote = async () => {
  const reqObj = {
    uri: 'https://api.tronalddump.io/random/quote',
    headers: {"Accept": "application/json"},
    json: true 
  }
  try {
    const reqJoke = await request(reqObj);
    return reqJoke.value;
  } catch (err) {
    console.log(err);
  }
};

getTronaldDumpQuote().then(res => console.log(res));