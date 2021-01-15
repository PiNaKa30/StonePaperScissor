const validationService = require('../services/validation');
const constants = require('../objects/constants');
const gameMethods = require('../services/game_methods');

function registerEvents(io) {
    io.on('connection', (socket) => {
        console.log("Someone joined Websocket! ", socket.id);

        socket.on('JOIN_ROOM', function (data) {
            console.log("Room Join Request: ", data.userId, data.matchId, data.isHost);
            socket.join(data.matchId);
            if(!data.isHost){
                gameMethods.startGame(io, data.matchId);
            }
        });

        socket.on('disconnect', function() {
            // Delete structures, Declare Winner
            console.log("User disconnected! ", socket.id);
        });
    });
}

module.exports = {
    registerEvents
};