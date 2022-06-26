const express = require('express');
const dbConnect = require('./dbConnect');
const app = express();
app.use(express.json())

const userRoute = require('./routes/usersRoute')
const transactionsRoute = require('./routes/transactionsRoute')
app.use('/api/users/', userRoute)
//Transactions api are the costs
app.use('/api/transactions/', transactionsRoute)
const port = 5000;

//Displaying success or fail on connection to server
app.get('/', (req, res) => res.send('Server is running!'));
app.listen(port, () => console.log('App is listening to port 5000'));