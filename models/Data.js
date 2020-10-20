const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
    mask: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Data', DataSchema);