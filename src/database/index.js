const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/noderest', { useMongoClient: true }); //noderest = nome do banco de dados
mongoose.Promise = global.Promise;

module.exports = mongoose;
