const express = require('express');

const peopleController = require('./controllers/peopleController');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => res.json({ ok: true }));

app.use("/pessoas", peopleController);

app.listen(PORT, () => console.log(`Rodando na porta ${PORT}`));
