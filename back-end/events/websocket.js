const validationService = require('../services/validation');
const constants = require('../objects/constants');
const gameMethods = require('../services/game_methods');

function registerEvents(io) {
    io.on('connection', (socket) => {
        console.log("Someone joined Websocket! ", socket.id);
        socket.emit('WELCOME_MSG', socket.id);

        socket.on('JOIN_ROOM', function (data) {
            console.log("Room Join Request: ", data.userId, data.matchId, data.isHost);
            socket.join(data.matchId);
            if(!data.isHost){
                gameMethods.startGame(io, data.matchId);
            }
        });

        socket.on('ROUND_PLAY', function (data) {
            console.log(data);
            gameMethods.playRound(io, socket.id, data.card);
        });

        socket.on('disconnect', function() {
            console.log("User disconnected! ", socket.id);
            gameMethods.declareWinnerByDisconnect();
        });
    });
}

module.exports = {
    registerEvents
};