const mongoose = require('mongoose');

const flightSchema = new mongoose.Schema({
    airline: {String,
        enum: ['American', 'Southwest', 'United']
    },
    airport: {String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
        default: 'DEN'
    },
    flightNo: {Number,
        min: 10,
        max: 9999,
        required: true
    },
    departs: {Date,
        default: function() {
            return new Date(new Date().setFullYear(new Date().getFullYear() + 1))
        }}
})