const Period = require("../model/period")

module.exports.getperiod= async (req,resp)=>{
const contperiod= await Period.find();
return(
    resp.status(200).json(contperiod) 
)}

module.exports.getperiodbyid= async (req,resp)=>{
    const {id}=req.params
    const contperiod= await Period.findById(id)
    return(
        resp.status(200).json(contperiod)
    )
}

module.exports.addperiod = (req, resp) => {
    const { month, year } = req.body; // Utilisez "result" au lieu de "value"
  
    const periodadd = new Period({
      month,
      year
    });
  
    periodadd
      .save()
      .then(() => {
        return resp.status(200).json({ msg: "period added" });
      })
      .catch((e) => {
        return resp.status(404).json({ msg: e.message });
      });
  };

module.exports.editperiod=(req,resp)=>{
    const{ month, year }=req.body
    const {id}=req.params
    Perioderiod.findByIdAndUpdate(id,{month, year})
    .then(()=>{return resp.status(200).json({msg:"period updated"})})
    .catch((e)=>{return resp.status(404).json({msg:e.message})})
}
module.exports.deleteperiod=(req,resp)=>{
    const {id}=req.params
    Period.findByIdAndDelete(id)
    .then(()=>{return resp.status(200).json({msg:"period deleted"})})
    .catch((e)=>{return resp.status(404).json({msg:e.message})})
}






