const getAllTasks = (req, res) => {
  res.send('Getting all tasks');
};

const createTask = (req, res) => {
  res.json(req.body);
};

const getTask = (req, res) => {
  res.json(req.params);
};

const updateTask = (req, res) => {
  res.send(`updating a task by the :id param / id: ${req.params.id}`);
};

const deleteTask = (req, res) => {
  res.send(`deleting a task by the:id param / id: ${req.params.id}`);
};

module.exports = { getAllTasks, createTask, getTask, updateTask, deleteTask };
