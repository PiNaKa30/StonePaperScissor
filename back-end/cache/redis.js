const redis = require('redis');
const props = require('../props');
const host = process.env.REDIS_HOST || "127.0.0.1";
const port = process.env.REDIS_PORT || props.PORT_REDIS;
const client = redis.createClient({host, port});

client.on('ready', () => {
    console.log("Success: Redis Connected!");
});

client.on('error', (err) => {
    console.log("Error: Redis Disconnected!\n");
    console.log(err);
});

module.exports = {
    client
}