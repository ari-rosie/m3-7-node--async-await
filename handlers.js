const {getDadJoke} = require('./__workshop/exercise-4.1');
const {getTronaldDumpQuote} = require('./__workshop/exercise-4.2');
const {getGeekJoke} = require('./__workshop/exercise-4.3');

const handleJoke = async (req, res) => {
    let jokeFunc;
    switch (req.params.type) {
        case 'dad':
            console.log('dad');
            jokeFunc = getDadJoke();
            break;
        case 'tronald':
            console.log('tronald');

            jokeFunc = getTronaldDumpQuote();
            break;
        case 'geek':
            console.log('geek');

            jokeFunc = getGeekJoke();
            break;
        default:
            res.json('Valid request: /joke/dad /joke/tronald /joke/geek');
    }
    const joke = await jokeFunc;
    res.json(joke);
};


module.exports = { handleJoke };
