exports.setu = async (req,res) => {
    console.log(req.body)
    res.status(200).json({msg:"Received"})
}