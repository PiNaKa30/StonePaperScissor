const redis = require('redis');
const props = require('../props');
const rClient = redis.createClient(props.PORT_REDIS);

function getMatchById(matchId){
    rClient.get(matchId, (err, data) => {
        
    });
}

function getPlayerById(){

}

module.exports = {
    getMatchById,
    getPlayerById
}