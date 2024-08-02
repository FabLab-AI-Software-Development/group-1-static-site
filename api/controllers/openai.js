// controllers/openaiController.js
const axios = require('axios');

// Controller function to handle OpenAI requests
const getOpenAIResponse = async (req, res) => {
  const { prompt } = req.body;
  
  console.log('Received prompt:', prompt);


  if (!prompt) {
    return res.status(400).json({ error: 'Prompt is required' });
  }

  try {
    const response = await axios.post('https://api.openai.com/v1/chat/completions', {
      prompt: prompt,
      max_tokens: 100
    }, {
      headers: {
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json'
      }
    });

    console.log('OpenAI response:', response.data);

    
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error interacting with OpenAI API' });
  }
};

module.exports = {
  getOpenAIResponse
};