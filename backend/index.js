const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// Empty array to add the tasks
let tasks = [];

// Fetch all the tasks
app.get('/tasks', (req, res) => {
    res.json(tasks);
});

// Add new task
app.post('/tasks', (req, res) => {

    // Extract task from the request body
    const task = req.body.task;

    // Check if the task is empty or not
    if(task) {

        // Add the task to the array
        tasks.push(task);

        res.status(201).send('Task added');
    }
    else{
        res.status(400).send('Task is required');
    }
});

app.delete('/tasks/:index', (req, res) => {
    const index = parseInt(req.params.index);

    if(index >= 0 && index < tasks.length){
        tasks.splice(index, 1);

        res.send('Task deleted');
    }

    else{
        res.status(404).send('Task not found');
    }
});

// For listening on the defined port for incoming requests
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});