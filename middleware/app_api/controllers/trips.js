const mongoose = require('mongoose');
const Trip = require('../models/travlr'); //Register model
const Model = mongoose.model('trips');

//GET: /trips - list all the trips
//Regardless of outcome, response must include HTML status code
// and JSON message to the requesting client
const tripsList = async(req, res) => {
    const q = await Model
        .find({}) // No filter, return all records
        .exec();

        //Uncomment the following line to show results of querey on the console
        //console.log(q);

    if(!q)
    { // Database returned no data
        return res
            .status(404)
            .json(err);
    } else { //Return resulting trip list
        return res
            .status(200)
            .json(q);
    }
};


//GET: /trips/:tripCode - lists a single trip
//Regardless of outcome, response must include HTML status code
// and JSON message to the requesting client
const tripsFindByCode = async(req, res) => {
    const q = await Model
        .find({'code': req.params.tripCode}) // No filter, return all records
        .exec();

        //Uncomment the following line to show results of querey on the console
        //console.log(q);

    if(!q)
    { // Database returned no data
        return res
            .status(404)
            .json(err);
    } else { //Return resulting trip list
        return res
            .status(200)
            .json(q);
    }
};



//POST: /trips -Adds a new Trip
//Regardless of outcome, response must include HTML status code
//and JSON message to the requesting client
const tripsAddTrip = async (req, res) => {
    getUser(req, res, async (req, res) => {
        const newTrip = new Trip({
            code: req.body.code,
            name: req.body.name,
            length: req.body.length,
            start: req.body.start,
            resort: req.body.resort,
            perPerson: req.body.perPerson,
            image: req.body.image,
            description: req.body.description
        });

        try {
            const q = await newTrip.save();
            if (!q) {
                // Database returned no data
                return res
                    .status(400) // Bad Request
                    .json({ error: "Failed to add trip." });
            } else {
                // Return new trip
                return res
                    .status(201) // Created
                    .json(q);
            }
        } catch (err) {
            return res
                .status(500) // Internal Server Error
                .json({ error: "Failed to add trip." });
        }
    });
};

const tripsUpdateTrip = async (req, res) => {
    getUser(req, res, async (req, res) => {
        try {
            const trip = await Trip.findOneAndUpdate(
                { 'code': req.params.tripCode },
                {
                    code: req.body.code,
                    name: req.body.name,
                    length: req.body.length,
                    start: req.body.start,
                    resort: req.body.resort,
                    perPerson: req.body.perPerson,
                    image: req.body.image,
                    description: req.body.description
                },
                { new: true }
            );
            if (!trip) {
                return res
                    .status(404)
                    .send({
                        message: "Trip not found with code " + req.params.tripCode
                    });
            }
            res.send(trip);
        } catch (q) {
            if (q.kind === 'ObjectId') {
                return res
                .status(404)
                .send({
                    message: "Trip not found with code " + req.params.tripCode
                    });
            }
            return res
                .status(500)
                .json(q);
        }
    });
};


const getUser = (req, res, callback) => {
    // Check if payload exists and contains email information
    if (req.payload && req.payload.email) {
      // Find the user by email in the User model
      User.findOne({ email: req.payload.email })
        .exec((err, user) => {
          // Handle case where no user is found
          if (!user) {
            return res.status(404).json({ "message": "User not found" });
          }
          // Handle any errors that occur during execution
          else if (q) {
            console.log(q);
            return res.status(500).json(q); // Return internal server error
          }
          // If user is found, invoke the callback function with the user's name
          callback(req, res, user.name);
        });
    } else {
      // If payload or email is missing, return a 404 error
      return res.status(404).json({ "message": "User not found" });
    }
  };
        




module.exports = {
    getUser,
    tripsList,
    tripsFindByCode,
    tripsAddTrip,
    tripsUpdateTrip
};