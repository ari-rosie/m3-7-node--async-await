const request = require('request-promise');

const getGeekJoke = async () => {
  const reqObj = {
    uri: 'https://geek-jokes.sameerkumar.website/api?format=json',
    json: true
  }

  try {
    const reqJoke = await request(reqObj);
    return reqJoke.joke;
  } catch (err) {
    console.log(err)
  }
};

getGeekJoke().then(res => console.log(res));
