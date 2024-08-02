// routes/openai.js
const express = require('express');
const router = express.Router();
const { getOpenAIResponse } = require('../controllers/openai');

// Define the route
router.post('/', getOpenAIResponse);

module.exports = router;