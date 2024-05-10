const express = require('express');
const corsMiddleware = require('./mw/corsMiddleware'); 

const app = express();


require('dotenv').config();

app.use(corsMiddleware);

app.use(express.json());

const Routes = require('./routes/Routes');
app.use('/api', Routes);

app.use('/carrito', Routes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
