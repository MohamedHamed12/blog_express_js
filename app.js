// import express from 'express';
const express = require('express');
// import {tasks} from './routes/tasks';
const tasks = require('./routes/tasks');
const app = express()

app.use(express.json());


// app.use('/api/v1/tasks', tasks);
app.use('/tasks', tasks);

const port = 3000;
const start =async () => {
    try {
        // await db.sequelize.sync({force: true})
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`)
        })
    } catch (error) {
        console.log(error)
    }
}
start();


