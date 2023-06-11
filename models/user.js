const mongoose = require('mongoose');
const {Schema} = mongoose;

const schema = new Schema({
    role:[{type:String}],
    bio:{
        name:{type:String},
        surname:{type:String},
        birthday: {type:Date}
    },
    rating: {type:String}
});
  
const model = mongoose.model('user',schema);
module.exports = model;