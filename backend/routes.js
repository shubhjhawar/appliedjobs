const express = require("express");
const router = express.Router();
const { getData, newData } = require("./controller");

router.route('/:name').get(getData).post(newData);

router.route('/:name').post((req, res)=>{
    res.status(200).json({message:"new data"});
});

module.exports = router;