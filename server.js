const expressMod = require('express');
const app = expressMod();

app.get('/', (req, res) => {
  res.send('Hello Oruvan...!!');
});

app.listen(8080, () => {
  console.log('Server listening on port 8080  =!');
});