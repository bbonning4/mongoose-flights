const mongoose = require('mongoose');

const destinationSchema = new mongoose.Schema({
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN']
    },
    arrival: Date
});

const flightSchema = new mongoose.Schema({
    airline: {type: String,
        enum: ['American', 'Southwest', 'United']
    },
    airport: {type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
        default: 'DEN'
    },
    flightNo: {type: Number,
        min: 10,
        max: 9999,
        required: true
    },
    departs: {type: Date,
        default: function() {
            return new Date(new Date().setFullYear(new Date().getFullYear() + 1))
        }
    },
    destinations: [destinationSchema],
})

module.exports = mongoose.model('Flight', flightSchema);