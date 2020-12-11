const mongoose = require('mongoose');
const Dersler = mongoose.model('db_dersler');

exports.baseRoute = async (req, res) => {
    res.send('Dersler API is Running');
}

exports.getDersler = async (req, res) => {
    await Dersler.find({},function (err, data){
        if(err){
            res.status(500).json({
                Result:{
                    success:false,
                    message:"Hata",
                    rowcount:0,
                }
            });
        }else{
            res.status(200).json({
                Result:{
                    success:true,
                    message:null,
                    rowcount:data.length,
                },
                Data:data
            });
        }
    });
}
exports.createDers = async (req, res) => {
    //console.log(req);
    //res.json(req);
    await new Dersler(req.body).save((err, data) => {
        if(err){
            res.status(500).json({
                Result:{
                    success:false,
                    message:"Ders Olusturulamadi",
                    rowcount:0,
                }
            });
        }else{
            res.status(200).json({
                Result:{
                    success:true,
                    message:null,
                    rowcount:data.length,
                },
                Data:data
            });
        }
    });
}
exports.getDersByDersKodu = async (req, res) => {
    await Dersler.find({ DERS_KODU: { $regex: '.*' + req.params.derskodu + '.*' } }, function (err, data){
        if(err){
            res.status(500).json({
                Result:{
                    success:false,
                    message:err.message,
                    rowcount:0,
                }
            });
        }else{
            res.status(200).json({
                Result:{
                    success:true,
                    message:null,
                    rowcount:data.length,
                },
                Data:data
            });
        }
    });
}

exports.getDerslerByProgramlar = async (req, res) => {
    let _doc = req.body;
    let _progID = _doc.PROG_IDs;
    await Dersler.find( { PROG_ID: { $in: _progID } }, function (err, data){
        if(err){
            res.status(500).json({
                Result:{
                    success:false,
                    message:err.message,
                    rowcount:0,
                }
            });
        }else{
            res.status(200).json({
                Result:{
                    success:true,
                    message:null,
                    rowcount:data.length,
                    parameters:_progID
                },
                Data:data
            });
        }
    });
}
exports.deleteDers = async (req, res) => {
    let _dersKodu = req.body.DERS_KODU;
    let _progID = req.body.PROG_ID;
    await Dersler.deleteMany({DERS_KODU:_dersKodu, PROG_ID:_progID},function(err, data){
        if(err){
            res.status(500).json({
                Result:{
                    success:false,
                    message:err.message,
                    rowcount:0,
                }
            });
        }else{
            res.status(200).json({
                Result:{
                    success:true,
                    message:null,
                    rowcount:data.length,
                },
                Data:data
            });
        }
    });
}

exports.updateDers = async (req, res) => {
    let _doc = req.body;
    let _dersKodu = req.body.DERS_KODU;
    let _progID = req.body.PROG_ID;
    await Dersler.updateMany({DERS_KODU:_dersKodu, PROG_ID:_progID}, _doc, function(err, data){
        if(err){
            res.status(500).json({
                Result:{
                    success:false,
                    message:err.message,
                    rowcount:0,
                }
            });
        }else{
            res.status(200).json({
                Result:{
                    success:true,
                    message:null,
                    rowcount:data.length,
                },
                Data:data
            });
        }
    });
}
exports.getDersWithHoca = async(req,res) => {
   res.status(200).send("API is running");
}