// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json({ limit: '5mb' })); // or '10mb', depending on your needs

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true
}).then(() => console.log('MongoDB connected'))
    .catch(err => console.error(err));


// Sample API route
const discRoutes = require('./routes/discRoutes');
app.use('/api', discRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
