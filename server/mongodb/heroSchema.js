var mongoose = require('mongoose');

var heroSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    race: {
        type: String,
        required: true
    },
    hpMin: {
        type: Number,
        required: true
    },
    hpMax: {
        type: Number,
        required: true
    },
    mpMin: {
        type: Number,
        required: true
    },
    mpMax: {
        type: Number,
        required: true
    },
    dmMin: {
        type: Number,
        required: true
    },
    dmMax: {
        type: Number,
        required: true
    },
    df: {
        type: Number,
        required: true
    },    
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Hero', heroSchema);

