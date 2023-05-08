const Flight = require('../models/flight.js');

module.exports = {
    create
}

async function create(req, res) {
    console.log(req.params.id);
    const flight = await Flight.findById(req.params.id);
    flight.destinations.push(req.body);
    try {
        await flight.save();
    } catch(err) {
        console.log(err);
    }
    res.redirect(`/flights/${flight._id}`);
}