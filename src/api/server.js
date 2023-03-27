const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

// allows us to access .env file
require('dotenv').config();

// assign express() to an app var and create port var to pass 
// into listen() later on (tell our app which port to listen on)
const app = express();
const port = process.env.PORT || 5000;

// tell app to use the middleware that we want
app.use(cors());
app.use(express.json());

/*
    uri variable will load our connection string that we got when 
    setting up our cluster from our .env file
    pass that along with some object flags into mongoose's connect function
    (to deal with depreciation issues)
*/

// connect to mongoDB server
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex:true, useUnifiedTopology: true});
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

/*
    how to include routes in our server
    const <model-name>Router = require(<file-path>); and then
    app.use(<model-root-path>, <router-variable>);
*/
// Require and use Route files
//const usersRouter = require('./routes/users');

//app.use('/users', usersRouter);

// Server listen
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})