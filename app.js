const express = require('express');
const app = express();
require('dotenv').config();

app.use(express.json());

const registroRoutes = require('./routes/registroRoutes');
app.use('/api', registroRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
