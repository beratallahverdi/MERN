
const mongoose = require('mongoose');
const DerslerCollection = "db_dersler";
const DerslerSchema = new mongoose.Schema({
    DERS_KODU:{
        type:String
    },
    DERS_ADI_TR:{
        type:String
    },
    DERS_ADI_EN:{
        type:String
    },
    PROG_ID:{
        type:String
    },
    TU:{
        type:String
    },
    KREDI:{
        type:String
    },
    AKTS:{
        type:String
    },
    YARIYIL:{
        type:String
    },
    AKADEMIK_ID:{
        type:String
    },
    AKTIF:{
        type:String
    },
});

module.exports = mongoose.model(DerslerCollection, DerslerSchema, DerslerCollection);