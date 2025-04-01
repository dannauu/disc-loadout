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

// GET all disc brands
router.get('/brands', async (req, res) => {
    try {
        const brands = await Disc.find().distinct('brand');
        res.json(brands);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Failed to fetch disc brands' });
    }
});

// GET discs by specific brand
router.get('/brands/:brandName', async (req, res) => {
    const { brandName } = req.params;

    try {
        const discsByBrand = await Disc.find({ brand: brandName });

        if (discsByBrand.length === 0) {
            return res.status(404).json({ message: `No discs found for brand: ${brandName}` });
        }

        res.json(discsByBrand);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Failed to fetch discs by brand' });
    }
});

// POST new disc
router.post('/add-disc', async (req, res) => {
    const { name, brand, category, speed, glide, turn, fade, stability } = req.body;
    try {
        const newDisc = new Disc({ name, brand, category, speed, glide, turn, fade, stability });
        const savedDisc = await newDisc.save();
        res.status(201).json(savedDisc);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// router.post('/', async (req, res) => {
//     const discs = req.body; // expecting an array of disc objects

//     if (!Array.isArray(discs)) {
//         return res.status(400).json({ message: 'Request body must be an array of disc objects' });
//     }

//     try {
//         const insertedDiscs = await Disc.insertMany(discs);
//         res.status(201).json(insertedDiscs);
//     } catch (err) {
//         console.error(err);
//         res.status(400).json({ message: 'Failed to insert discs', error: err.message });
//     }
// });

module.exports = router;