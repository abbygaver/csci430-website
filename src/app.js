const express = require('express');
const path = require('path'); 

// import your other routers here
const indexRouter = require('../routers/index'); 
const loginRouter = require('../routers/login'); 
const createAccountRouter = require('../routers/create-account');
const mainRouter = require('../routers/main');
const csci430IndexRouter = require('../routers/courses/csci430');
const _404Router = require('../routers/404');

const app = express(); 

const dir = path.join(__dirname, "../public"); 
app.use(express.static(dir)); 

// register your other routers here
app.use(indexRouter); 
app.use(loginRouter);
app.use(createAccountRouter);
app.use(mainRouter);
app.use(csci430IndexRouter);
app.use(_404Router);

const port = process.env.PORT || 3000; 
app.listen(port, () => { 
    console.log('Server is up on port ' + port) 
});