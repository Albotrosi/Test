const express=require('express');
const router = express.Router();

router.get('/',(req,res) =>{
    res.render('page')
});

const studs = [
    { id: 1, name: 'viktoria', gender:'female', tags: ['magic voice']}
]

router.get('/stud/list',(req,res) =>{
    res.json(studs)
});
module.exports = router;