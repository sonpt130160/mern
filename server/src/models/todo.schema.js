const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const TodoSchema = new mongoose.Schema({
    task: {type: String}
  });


  
  module.exports = mongoose.model('Todo', TodoSchema)