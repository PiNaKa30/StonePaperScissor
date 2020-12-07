const express = require('express');
const setupService = require('../services/match_setup');
const router = express.Router();


router.post('/', (req, res) => {
    console.log(req.body.text);
    res.send('Hello World!');
});

router.put('/host', (req, res) => {
    var hostRequest = req.body;
    var matchId = setupService.hostMatch(hostRequest.userId, hostRequest.numRounds, hostRequest.roundTime);
    res.send(matchId);
});

module.exports.router = router;