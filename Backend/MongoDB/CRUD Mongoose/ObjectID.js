//_id: 5a724953ab83547957541e6a
//12 bytes
  //4 first bytes: timestamp const id = new mongoose.Types.ObjectId(); id.getTimestamp()
  //3 next bytes: machine identifier
  //next 2 bytes: process identifier
  //3 bytes: counter

//VALIDATING ObjectID
if (!mongoose.Types.ObjectId.isValid(req.body.customerId)) {
  return res.status(400).send("Invalid Customer Id.")
} //needs to be inside of input validation function

const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);

function validateRental(rental) {
  const schema = {
    customerId = Joi.objectId().required(),
    movieId = Joi.objectId().required() 
  };
  return joi.validate(rental, schema);
}

exports.validate = validateRental;