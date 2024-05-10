const pool = require('../../db');
const queries = require('../queries');


//Get all Tasks from DB
const getTasks = (req, res) => {
    pool.query(queries.getTasks, (error, results) => {
        if (error) {
            throw error
        };
        res.status(200).json(results.rows)
    })
}


//Get a single Task from DB
const getTaskById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getTaskById, [id], (error, results) => {
        if (error) {
            error;
        }
        res.status(200).json(results.rows)
    });
}

//Add a Task to DB
const addTask = (req, res) => {
    const { title, description, dueDate, status } = req.body;

    //check if task exists
    pool.query(queries.checkTaskExists, [title], (error, results) => {
        if (results.rows.length) {
            res.send("Task Already Exists")
        }

    //add task to database
    pool.query(queries.addTask, [title, description, dueDate, status], (error, results) => {
        if (error) {
            throw error
        }
        res.status(201).send("Task Created Successfully...");

    });
    });
    
}


//Delete a Task from DB
const removeTask = (req, res) => {
    const id = parseInt(req.params.id);

    pool.query(queries.getTaskById, [id], (error, results) => {
        const noTaskFound = !results.rows.length;

        if(noTaskFound){
            res.send("Task does not exist in DB...");
        }

    pool.query(queries.removeTask, [id], (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).send("Task removed successfully from DB...");
    });
    });
}

//Updating a single Task in DB
const updateTask = (req, res) => {
    const id = parseInt(req.params.id);

    const { title } = req.body;

    pool.query(queries.getTaskById, [id], (error, results) => {
        const noTaskFound = !results.rows.length;

        if (noTaskFound) {
            res.send("Task does not exist in DB...");
        }

        pool.query(queries.updateTask, [title, id], (error, results) => {
            if (error) {
                throw error;
            }
            res.status(200).send("Task updated successfully...")
        });
    });
}

module.exports = {
    getTasks,
    getTaskById,
    addTask,
    removeTask,
    updateTask
}