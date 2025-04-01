// backend/models/User.js
const mongoose = require('mongoose');

const DiscSchema = new mongoose.Schema({
    name: { type: String, required: true },
    brand: { type: String, required: true },
    category: { type: String, required: true },
    speed: { type: String, required: true },
    glide: { type: String, required: true },
    turn: { type: String, required: true },
    fade: { type: String, required: true },
    stability: { type: String, required: true },
}, {
    timestamps: true
});

module.exports = mongoose.model('Discs', DiscSchema);