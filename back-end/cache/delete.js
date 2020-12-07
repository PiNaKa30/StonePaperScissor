const redis = require('redis');
const props = require('../props');
const rClient = redis.createClient(props.PORT_REDIS);

function deleteMatchById(matchId){
    rClient.del(matchId);
}

function deletePlayerById(userId){
    rClient.del(userId);
}

module.exports = {
    deleteMatchById,
    deletePlayerById
}