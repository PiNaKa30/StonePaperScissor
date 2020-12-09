const redis = require('redis');
const props = require('../props');
const setupService = require('./match_setup');
const constants = require('../objects/constants');
const rClient = redis.createClient(props.PORT_REDIS);

function hostValidation(res, userId, numRounds, roundTime){
    rClient.get("PLAYER_" + userId, (err, data) => {
        if(data){
            return res.json({
                type: constants.TYPE_ERROR,
                message: constants.ERROR_USERNAME_TAKEN,
                data: null
            });
        } else {
            var matchId = setupService.hostMatch(userId, numRounds, roundTime);
            return res.json({
                type: constants.TYPE_SUCCESS,
                message: constants.SUCCESS_MATCH_HOSTED,
                data: { matchId }
            });
        }
    });
}

function joinValidation(res, userId, matchId){
    rClient.get("PLAYER_" + userId, (err, data) => {
        if(data){
            return res.json({
                type: constants.TYPE_ERROR,
                message: constants.ERROR_USERNAME_TAKEN,
                data: null
            });
        } else {
            rClient.get("MATCH_" + matchId, (err, data) => {
                if(data){
                    var matchData = JSON.parse(data);
                    if(matchData.status == constants.MATCH_WAITING){
                        matchData = setupService.joinMatch(userId, matchId, matchData);
                        return res.json({
                            type: constants.TYPE_SUCCESS,
                            message: constants.SUCCESS_MATCH_JOINED,
                            data: matchData
                        });
                    } else {
                        return res.json({
                            type: constants.TYPE_ERROR,
                            message: constants.ERROR_MATCH_BEGUN,
                            data: null
                        });
                    }
                } else {
                    return res.json({
                        type: constants.TYPE_ERROR,
                        message: constants.ERROR_INVALID_MATCH,
                        data: null
                    });
                }
            });
        }
    });
}

module.exports = {
    hostValidation,
    joinValidation
}