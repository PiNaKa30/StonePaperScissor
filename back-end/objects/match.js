const constants = require('./constants');

function createMatch(userId, numRounds, gameMode){
    return {
        players: {
            player1: userId,
            player2: null
        },
        scores: {
            player1: 0,
            player2: 0
        },
        currentRound: 0,
        numRounds,
        gameMode,
        status: constants.MATCH_WAITING
    };
}

module.exports = {
    createMatch
}
