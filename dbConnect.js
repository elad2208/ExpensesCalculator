const mongoose = require('mongoose');

//connection to Mongo Atlas by the link
const connect = mongoose.connect('mongodb+srv://ori:ori123456@hit.lonxa.mongodb.net/ExpensesCalculator', {useNewUrlParser : true , useUnifiedTopology : true});

//represent succeess or fail of connection to mongodb
const connection = mongoose.connection;

connection.on('error', err => console.log(err));

connection.on('connected', () => console.log("MongoDB connected successfully"));