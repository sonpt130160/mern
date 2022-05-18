const Todo = require("../models/todo.schema");

const createTodo = async (res, req) => {
  try {
    console.log("hello");
    const task = new Todo(req.body);
    await task.save();
    // res.json({ task });
  } catch (error) {
    // res.status(httpStatus.OK).json("error");
  }
};

const listTodo = async (res, req) => {
  try { 
    const listTask = await Todo.find();
    res.json({ listTask });
  } catch (error) {
    // res.status(httpStatus.OK).json("error");/
  }
};

module.exports = {
  createTodo,
  listTodo,
};
