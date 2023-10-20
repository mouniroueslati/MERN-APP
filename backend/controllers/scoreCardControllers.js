const ScoreCard = require('../model/scorecard');

// Créez une nouvelle entrée dans le tableau
module.exports.addscorecard = async (req, res) => {
  const { month, data } = req.body;

  const scorecardadd = new ScoreCard({ month, data });

  await scorecardadd
    .save()
    .then(() => {
        return res.status(200).json({msg: "scorecard added"});
      })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
};

// Récupérez toutes les entrées du tableau
module.exports.getAllScoreCard = async (req, res) => {
  ScoreCard.find()
    .then((entries) => {
      res.status(200).json(entries);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
};

// Récupérez une entrée spécifique du tableau par mois
module.exports.getScoreCardEntryByMonth = (req, res) => {
  const { month } = req.params;

  ScoreCard.findOne({ month })
    .then((entry) => {
      if (!entry) {
        return res.status(404).json({ message: 'Entrée non trouvée' });
      }
      res.json(entry);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
};

// Mettez à jour une entrée du tableau par mois
exports.updateScoreCardEntry = (req, res) => {
  const { month } = req.params;
  const newData = req.body.data;

  ScoreCard.findOneAndUpdate(
    { month },
    { $set: { data: newData } },
    { new: true }
  )
    .then((entry) => {
      if (!entry) {
        return res.status(404).json({ message: 'Entrée non trouvée' });
      }
      res.json(entry);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
};

// Supprimez une entrée du tableau par mois
exports.deleteScoreCardEntry = (req, res) => {
  const { month } = req.params;

  ScoreCard.findOneAndRemove({ month })
    .then((entry) => {
      if (!entry) {
        return res.status(404).json({ message: 'Entrée non trouvée' });
      }
      res.json({ message: 'Entrée supprimée avec succès' });
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
};