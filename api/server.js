const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const studentRouter = require('./routes/student.routes.js');
const tutorRouter = require('./routes/tutor.routes.js');
const loginRouter = require('./routes/login.routes.js')

// allows us to access .env file
require('dotenv').config();

// assign express() to an app var and create port var to pass 
// into listen() later on (tell our app which port to listen on)
const app = express();
const port = process.env.PORT || 5000;

// tell app to use the middleware that we want
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

/*
    uri variable will load our connection string that we got when 
    setting up our cluster from our .env file
    pass that along with some object flags into mongoose's connect function
    (to deal with depreciation issues)
*/

// connection string in .env
const uri = process.env.ATLAS_URI;

//connect to db
mongoose.connect(uri)
    .then(() => {
        // Server listen
        app.listen(port, () => {
            console.log(`Server is running on port: ${port}`);
        })
    })
    .catch((error) => {
        console.log(error)
    })

/*
    how to include routes in our server
    const <model-name>Router = require(<file-path>); and then
    app.use(<model-root-path>, <router-variable>);
*/

// all the endpoints to do with auth will be found in the studentRouter file
// anything in the student routes file auto starts with auth
app.use("/s-auth", studentRouter);
app.use("/t-auth", tutorRouter);
app.use("/login", loginRouter);
