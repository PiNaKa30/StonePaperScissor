const validationService = require('../services/validation');
const constants = require('../objects/constants');

module.exports = function (io) {
    io.sockets.on('connection', function (socket) {

        socket.on('JOIN_ROOM', function (data) {
            // Validate 2 users, Join room if ok
            if(validationService.roomValidation(data.userId, data.matchId)){
                socket.join(matchId);
            } else {
                socket.emit(constants.TYPE_NOTIFICATION, {
                    message: constants.NOTIFY_CANT_JOIN_ROOM,
                });
            }
        });

        socket.on('disconnect', function() {
            // Delete structures, Declare Winner
        });
    });
}