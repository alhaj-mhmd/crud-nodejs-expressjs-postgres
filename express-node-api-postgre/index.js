const express = require('express');
const user = require('./routes/user');
const app = express();
app.use(express.json());// middleware json

app.use('/api/users',user);
const PORT = 3000;
app.listen(PORT,()=>{`App is running on Port ${PORT}`});