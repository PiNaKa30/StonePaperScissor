const express = require('express');
const validationService = require('../services/validation');
const router = express.Router();


router.post('/', (req, res) => {
    console.log(req.body.text);
    res.send('Hello World!');
});

router.post('/host', (req, res) => {
    var hostRequest = req.body;
    return validationService.hostValidation(res, hostRequest.userId, hostRequest.numRounds, hostRequest.gameMode, hostRequest.socketId);
});

router.post('/join', (req, res) => {
    var joinRequest = req.body;
    return validationService.joinValidation(res, joinRequest.userId, joinRequest.matchId, joinRequest.socketId);
});

module.exports.router = router;