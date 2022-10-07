const Task = require('../models/taskModel');
const asyncWraper = require('../middlewares/async');

const getAllTasks = asyncWraper(async (req, res) => {
  const tasks = await Task.find();
  res.status(200).send({ tasks });
});

const createTask = asyncWraper(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
});

const getTask = asyncWraper(async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findOne({ _id: taskID });

  if (!task) {
    return res
      .status(404)
      .json({ msg: `A task com o id: ${taskID} não existe` });
  }

  res.status(200).json({ task });
});

const updateTask = asyncWraper(async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
    new: true,
    runValidators: true,
  });

  if (!task) {
    return res
      .status(404)
      .json({ msg: `A task com o id: ${taskID} não existe` });
  }

  res.status(200).json({ task });
});

const deleteTask = asyncWraper(async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findOneAndDelete({ _id: taskID });

  if (!task) {
    return res
      .status(404)
      .json({ msg: `A task com o id: ${taskID} não existe!` });
  }

  return res.status(200).json({ msg: 'excluido com sucesso!' });
});

module.exports = { getAllTasks, createTask, getTask, updateTask, deleteTask };
