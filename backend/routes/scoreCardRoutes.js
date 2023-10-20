const { Router } = require('express');
const SCORECARD = require('../model/scorecard')

const {addscorecard, getAllScoreCard, getScoreCardEntryByMonth, updateScoreCardEntry, deleteScoreCardEntry} = require('../controllers/scoreCardControllers');
const scorecardrouter = Router();

// Ajoutez une nouvelle entrée au tableau
scorecardrouter.post('/scorecard', addscorecard);

// Récupérez toutes les entrées du tableau
scorecardrouter.get('/scorecard', getAllScoreCard);

// Récupérez une entrée spécifique du tableau par mois
scorecardrouter.get('/scorecard/:month', getScoreCardEntryByMonth);

// Mettez à jour une entrée du tableau par mois
scorecardrouter.put('/scorecard/:month', updateScoreCardEntry);

// Supprimez une entrée du tableau par mois
scorecardrouter.delete('/scorecard/:month', deleteScoreCardEntry);

module.exports = scorecardrouter;