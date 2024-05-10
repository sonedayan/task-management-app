const getTasks = "SELECT * FROM tasks";
const getTaskById = "SELECT * FROM tasks WHERE id = $1";
const checkTaskExists = "SELECT t FROM tasks t WHERE t.title = $1";
const addTask = "INSERT INTO tasks (title, description, duedate, status) VALUES ($1, $2, $3, $4)";
const removeTask = "DELETE FROM tasks WHERE id = $1";
const updateTask = "UPDATE tasks SET title = $1 WHERE id = $2";


module.exports = {
    getTasks,
    getTaskById,
    checkTaskExists,
    addTask,
    removeTask,
    updateTask
}