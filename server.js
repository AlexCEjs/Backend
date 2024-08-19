const express = require('express');
const axios = require('axios');
const app = express();
const cors = require('cors');

const PORT = process.env.PORT || 3000;  // Aquí se define la variable PORT

app.use(express.json());
app.use(cors());

app.get('/api/characters', async (req, res) => {
    try {
        const response = await axios.get('https://dobler22.github.io/esponjoso/dragonball.json');
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching characters' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
