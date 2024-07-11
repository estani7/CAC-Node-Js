const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', (req, res) => {
  res.render('index', { title: 'Home' });
});

const authRouter = require('./routes/authRoute');
const clientesRouter = require('./routes/clientesRoute');

app.use(express.json());
app.use('/clientes', clientesRouter);
app.use('/auth', authRouter);
app.use(express.static('public'));


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

