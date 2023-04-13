const express = require ('express');
const router = express.Router();

router.get('product/:cat/:id',(req,res) => {
    console.log('!!!!',req.params);
    res.end('WORK')
});

router.get('/files/name.jfif',(req,res) => {
    console.log('!!!!',req.params);
    res.end('WORK')
});

module.exports = router;
