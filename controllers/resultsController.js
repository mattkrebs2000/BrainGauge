const db = require("../models");


module.exports = {

  
gameresults: function (req, res) {
console.log("usercontroller login", req.body)

db.performance
  .find({})

  .then((dbModel) => {


 console.log("this is the performance data", dbModel)
 res.send(dbModel)

  })
  .catch((err) => {
    console.log("error" + err);
    res.status(422).json(err);
  });


},


surveyresults: function (req, res) {
console.log("usercccc", req.body)
let user = window.localStorage.getItem();
console.log("user", user)
db.survey
  .findAll({ email: req.body.email })

  .then((dbModel) => {

console.log("these are the matches",dbModel)

res.send(dbModel)
     
  })
  .catch((err) => {
    console.log("error" + err);
    res.status(422).json(err);
  });

}











}