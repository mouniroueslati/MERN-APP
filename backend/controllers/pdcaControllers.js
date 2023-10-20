const PDCA = require('../model/pdca');

module.exports.addpdca = async (req, res) => {
  const { date, probleme, responsable, action, echeance, avancement, statut} = req.body
  const pdcaadd = new PDCA ({
    date,
    probleme,
    responsable,
    action,
    echeance,
    avancement,
    statut
  }) 
  await pdcaadd 
  .save()
  .then(() => {
    return res.status(200).json({msg: "pdca added"});
  })
  .catch((e) => { 
    return res.status(404.).json({msg: e.message})
  });
};

module.exports.getpdca = async (req, res) => {
  const pdcaget= await PDCA.find();
  return(
    res.status(200).json(pdcaget)
  )
};

exports.editpdca = async (req, res) => {
    const { date, probleme, responsable, action, echeance, avancement, statut} = req.body
    const {id}=req.params
    PDCA.findByIdAndUpdate(id, { date, probleme, responsable, action, echeance, avancement, statut})
    .then(() => {return res.status(200).json({msg:"pdca updated"})})
    .catch((e) => {return res.status(404).json({msg:e.message})})
};

exports.deletepdca = async (req, res) => {
    const {id}=req.params
    PDCA.findByIdAndDelete(id)
    .then(()=>{return res.status(200).json({msg:"pdca deleted"})})
    .catch((e)=>{return res.status(404).json({msg:e.message})})
};