var express = require("express");
var app = express();
var mysql = require("mysql");
var bodyParser = require('body-parser')
var router = express.Router();


var con = mysql.createConnection({
  host: "localhost",
  user: "naseef",
  password: "13641364@@Na",
  database: "restaurent_v1",
});

router.get('/', (req, res) => {
  res.send('router orders')
})



///get  category by
router.get("/settleOrder", (req, res) => {
  console.log(req.query.fdShopId)

  try {

    const data = new Model({
      name: req.body.name,
      age: req.body.age
    })

    const dataToSave = await data.save();
    res.status(200).json(dataToSave)
  }
  catch (error) {
    res.status(400).json({ message: error.message })
  }
});






module.exports = router;

