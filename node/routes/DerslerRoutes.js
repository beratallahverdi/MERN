const express = require('express');
const router = express.Router();

const derslerController = require('../controllers/DerslerController');

router.post('/create', derslerController.createDers);
router.get('/',derslerController.getDersWithHoca);
router.get('/getDerslerByDersKodu/:derskodu',derslerController.getDersByDersKodu);
router.post('/getDerslerByProgramlar',derslerController.getDerslerByProgramlar);
router.get('/get', derslerController.getDersler);
router.put('/update', derslerController.updateDers);
router.delete('/delete', derslerController.deleteDers);

/*
router.get('/',(req, res) => {
    res.status(200).send("Server Running");
});
router.get('/getDersler', async (req, res)=>{
    const dersler = await Dersler.find();
    res.json(dersler);
});
*/
module.exports = router;
