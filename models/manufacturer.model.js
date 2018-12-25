'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let manufacturerSchema = new Schema({
    name: {type: String, required: true},
    description: {type: String, required: false},
    contractStartDate: {type: String, required: false},
    distributionArea: {type: String, required: true},
    active: {type: Boolean, required: true}
});

module.exports = mongoose.model('Manufacturer', manufacturerSchema);