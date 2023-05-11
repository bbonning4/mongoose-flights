const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

module.exports = {
    new: newTicket,
    create
}

async function newTicket(req, res) {
    const flight = await Flight.findById(req.params.id);
    res.render('tickets/new', { flight, errorMsg: '', title: 'Add Ticket' });
}

async function create(req, res) {
    const flight = await Flight.findById(req.params.id);
    req.body.flight = flight._id;
    try {
        await Ticket.create(req.body);
        res.redirect(`/flights/${req.params.id}`);
    } catch(err) {
        console.log(err);
        res.render('tickets/new', { flight, errorMsg: err.message, title: 'Add Ticket' })
    }
}