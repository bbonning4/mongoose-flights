const Flight = require('../models/flight.js');

module.exports = {
    index,
    new: newFlight,
    create,
    show
}

async function index(req, res) {
    res.render('flights/index', {
        flights: await Flight.find({})
    });
}

function newFlight(req, res) {
    res.render('flights/new', { errorMsg: ''});
}

async function create(req, res) {
    for(let key in req.body) {
        if(req.body[key] === '') {
            delete req.body[key];
        }
    }
    try {
        await Flight.create(req.body);
        res.redirect('/flights');
    } catch(err) {
        res.render('flights/new', { errorMsg: err.message });
    }
}

async function show(req, res) {
    const flight = await Flight.findById(req.params.id);
    console.log(flight);
    res.render('flights/show', { flight });
}