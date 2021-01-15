const constants = require('../objects/constants');
const redis = require('../cache/redis');

function startGame(io, matchId){
    redis.client.get("MATCH_" + matchId, (err, data) => {
        if(data){
            data = JSON.parse(data);
            let gameInfo = {
                hostName: data.players.player1,
                joineeName: data.players.player2,
                gameMode: data.gameMode
            };
            io.in(matchId).emit("START_GAME", gameInfo);
        }
    });
}

module.exports = {
    startGame
}