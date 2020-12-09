const redis = require('redis');
const props = require('../props');
const setupService = require('./match_setup');
const constants = require('../objects/constants');
const rClient = redis.createClient(props.PORT_REDIS);

function hostValidation(res, userId, numRounds, roundTime){
    rClient.get("PLAYER_" + userId, (err, data) => {
        if(data){
            return res.json({
                type: "Error",
                data: constants.ERROR_USERNAME_TAKEN
            });
        } else {
            var matchId = setupService.hostMatch(userId, numRounds, roundTime);
            return res.json({
                type: "Success",
                data: { matchId }
            });
        }
    });
}

module.exports = {
    hostValidation
}