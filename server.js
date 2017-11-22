const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.static(__dirname + '/public'));
app.use('/vendors', express.static('node_modules'));

app.get('/', (req, res) => {
  res.render(path.join('index'));
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});