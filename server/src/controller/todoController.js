const Todo = require("../models/todo.schema");
const catchAsync = require("./catchAsync.js ")


const createTodo = async (req, res) => {
  const task = new Todo(req.body)
  await task.save()
  res.json(task);
};

const listTodo = async (req, res) => {
  const taskList = await Todo.find().exec()
  res.json(taskList);
};

const todoDetail = async (req, res) => {
  const taskDetail = await Todo.findById(req.params.id)
  res.json(taskDetail);
};

const updateTodo = async (req, res) => {
  const taskDetail = await Todo.findByIdAndUpdate(req.params.id, req.body, {new: true})
  res.json(taskDetail);
};

const deleteTodo = async (req, res) => {
  const taskDelete = await Todo.findByIdAndDelete(req.params.id)
  res.json("Delete successful!");
};



module.exports = {
  createTodo,
  listTodo,
  todoDetail,
  updateTodo,
  deleteTodo,
};
