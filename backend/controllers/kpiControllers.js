const KPI = require("../model/kpis")

module.exports.getkpi= async (req,resp)=>{
const contkpi= await KPI.find();
return(
    resp.status(200).json(contkpi) 
)}

module.exports.getkpibyid= async (req,resp)=>{
    const {id}=req.params
    const contkpi= await KPI.findById(id)
    return(
        resp.status(200).json(contkpi)
    )
}

module.exports.addkpi = (req, resp) => {
    const { description, result, budget } = req.body; // Utilisez "result" au lieu de "value"
  
    console.log("Description:", description);
    console.log("Result:", result);
    console.log("Budget:", budget);
  
    const kpiadd = new KPI({
      description,
      result,
      budget,
    });
  
    kpiadd
      .save()
      .then(() => {
        return resp.status(200).json({ msg: "kpi added" });
      })
      .catch((e) => {
        return resp.status(404).json({ msg: e.message });
      });
  };

module.exports.editkpi=(req,resp)=>{
    const{description, result, budget}=req.body
    const {id}=req.params
    KPI.findByIdAndUpdate(id,{description, result, budget})
    .then(()=>{return resp.status(200).json({msg:"kpi updated"})})
    .catch((e)=>{return resp.status(404).json({msg:e.message})})
}
module.exports.deletekpi=(req,resp)=>{
    const {id}=req.params
    KPI.findByIdAndDelete(id)
    .then(()=>{return resp.status(200).json({msg:"kpi deleted"})})
    .catch((e)=>{return resp.status(404).json({msg:e.message})})
}






