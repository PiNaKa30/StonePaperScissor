const express = require('express');
const validationService = require('../services/validation');
const router = express.Router();


router.post('/', (req, res) => {
    console.log(req.body.text);
    res.send('Hello World!');
});

router.put('/host', (req, res) => {
    var hostRequest = req.body;
    return validationService.hostValidation(res, hostRequest.userId, hostRequest.numRounds, hostRequest.roundTime);
});

router.put('/join', (req, res) => {
    var joinRequest = req.body;
    return validationService.joinValidation(res, joinRequest.userId, joinRequest.matchId);
});

module.exports.router = router;