const Task = require('../models/taskModel');
const asyncWraper = require('../middlewares/async');
const { CreateCustomError } = require('../errors/custom-error');

const getAllTasks = asyncWraper(async (req, res) => {
  const tasks = await Task.find();
  res.status(200).send({ tasks });
});

const createTask = asyncWraper(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
});

const getTask = asyncWraper(async (req, res, next) => {
  const { id: taskID } = req.params;
  const task = await Task.findOne({ _id: taskID });

  if (!task) {
    return next(
      CreateCustomError(`A task com o id: ${taskID} não existe`, 404)
    );
  }

  res.status(200).json({ task });
});

const updateTask = asyncWraper(async (req, res, next) => {
  const { id: taskID } = req.params;
  const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
    new: true,
    runValidators: true,
  });

  if (!task) {
    return next(
      CreateCustomError(`A task com o id: ${taskID} não existe`, 404)
    );
  }

  res.status(200).json({ task });
});

const deleteTask = asyncWraper(async (req, res, next) => {
  const { id: taskID } = req.params;
  const task = await Task.findOneAndDelete({ _id: taskID });

  if (!task) {
    return next(
      CreateCustomError(`A task com o id: ${taskID} não existe`, 404)
    );
  }

  return res.status(200).json({ msg: 'excluido com sucesso!' });
});

module.exports = { getAllTasks, createTask, getTask, updateTask, deleteTask };
