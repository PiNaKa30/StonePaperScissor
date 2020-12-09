const redis = require('redis');
const props = require('../props');
const client = redis.createClient(props.PORT_REDIS);

client.on('ready', () => {
    console.log("Success: Redis Connected!");
});

client.on('error', (err) => {
    console.log("Error: Redis Connection Failed !");
    console.log(err);
});

module.exports = {
    client
}