const express = require('express');
require('dotenv').config();
const app = require();
const port =3000;

app.get('/',(req,res) => {
    res.send('Hello World');
});

app.listen(process.env.PORT , () =>{
        console.log(`Exampe app listening on port ${port}`);
});

