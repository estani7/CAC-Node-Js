const express= require('express');

const authRouter = require('./routes/authRoute');
const clientesRouter = require('./routes/clientesRoute');
const app = express();

app.use(express.json());
app.use('/clientes', clientesRouter);
app.use('/auth', authRouter);

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    });