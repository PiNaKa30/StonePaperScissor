const redis = require('redis');
const props = require('../props');
const rClient = redis.createClient(props.PORT_REDIS);

function addMatchToCache(matchId, matchObject){
    rClient.set("MATCH_" + matchId, JSON.stringify(matchObject));
}

function addPlayerToCache(userId, matchId){
    rClient.set("PLAYER_" + userId, matchId);
}

module.exports = {
    addMatchToCache,
    addPlayerToCache
}