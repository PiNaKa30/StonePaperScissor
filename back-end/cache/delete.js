const redis = require('./redis');

function deleteMatchById(matchId){
    redis.client.del(matchId);
}

function deletePlayerById(userId){
    redis.client.del(userId);
}

module.exports = {
    deleteMatchById,
    deletePlayerById
}