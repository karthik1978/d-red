const express = require('express'); 
const router = express.Router();
var data = "Welcome to Srri Vignesh and company's...Welcome Page..!"

router.get('/', (req, res) => {
    res.send(data);
});

module.exports = router;
