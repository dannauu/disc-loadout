// backend/models/User.js
const mongoose = require('mongoose');

const DiscSchema = new mongoose.Schema({
    manufacturer: { type: String, required: true },
    discModel: { type: String, required: true },
    speed: { type: Number, required: true },
    glide: { type: Number, required: true },
    turn: { type: Number, required: true },
    fade: { type: Number, required: true },
}, {
    timestamps: true
});

module.exports = mongoose.model('Discs', DiscSchema);
