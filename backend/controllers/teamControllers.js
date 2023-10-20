const Team = require("../model/team")

module.exports.getteam= async (req,resp)=>{
const contteam= await Team.find();
return(
    resp.status(200).json(contteam) 
)}

module.exports.getteambyid= async (req,resp)=>{
    const {id}=req.params
    const contteam= await Team.findById(id)
    return(
        resp.status(200).json(contteam)
    )
}

module.exports.addteam = (req, resp) => {
    const { teamname, teamlead } = req.body;
  
    const teamadd = new Team({
      teamname,
      teamlead
    });
  
    teamadd
      .save()
      .then(() => {
        return resp.status(200).json({ msg: "team added" });
      })
      .catch((e) => {
        return resp.status(404).json({ msg: e.message });
      });
  };

module.exports.editteam=(req,resp)=>{
    const{ teamname, teamlead }=req.body
    const {id}=req.params
    Team.findByIdAndUpdate(id,{teamname, teamlead})
    .then(()=>{return resp.status(200).json({msg:"team updated"})})
    .catch((e)=>{return resp.status(404).json({msg:e.message})})
}
module.exports.deleteteam=(req,resp)=>{
    const {id}=req.params
    Team.findByIdAndDelete(id)
    .then(()=>{return resp.status(200).json({msg:"team deleted"})})
    .catch((e)=>{return resp.status(404).json({msg:e.message})})
}