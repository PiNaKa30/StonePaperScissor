const match = require('../objects/match');
const cacheAdd = require('../cache/add');
const cacheSearch = require('../cache/search');

/**
 * TODO: Add Validation
 */ 
function hostMatch(userId, numRounds, roundTimer) {
    var newMatch = match.createMatch(userId, numRounds, roundTimer);
    var matchId = generateMatchId();
    console.log(userId, matchId);
    cacheAdd.addPlayerToCache(userId, matchId);
    cacheAdd.addMatchToCache(matchId, newMatch);
    return matchId;
}

/**
 * TODO: Add Validation
 */ 
function joinMatch(userId, matchId) {
    console.log(userId, matchId);
    cacheAdd.addPlayerToCache(userId, matchId);
    cacheAdd.addMatchToCache(matchId, newMatch);
    return matchId;
}

function generateMatchId(){
    const numbers = "9876543210";
    var id = "";
    for(let i=0; i<6; i++){
        id += numbers.charAt(Math.random() * 10);
    }
    return id;
}

module.exports = {
    hostMatch,
    joinMatch
}