const express = require('express');
const router = express.Router();
const Disc = require('../models/Discs');

// GET all discs
router.get('/', async (req, res) => {
    try {
        const discs = await Disc.find();
        res.json(discs);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Failed to fetch discs' });
    }
});

// POST new disc
router.post('/', async (req, res) => {
    const { manufacturer, discModel, speed, glide, turn, fade } = req.body;
    try {
        const newDisc = new Disc({ manufacturer, discModel, speed, glide, turn, fade });
        const savedDisc = await newDisc.save();
        res.status(201).json(savedDisc);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;