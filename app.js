const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hallo Welt!');
});

app.listen(port, () => {
  console.log(`App läuft auf http://localhost:${port}`);
});

module.exports = app; // Für Tests
