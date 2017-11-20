const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 5000;

let app = express();

app.set('view engine', 'ejs');
app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.render(path.join('index'));
});

app.listen(app.get('port'), () => {
  console.log('Node app is running on port', app.get('port'));
});