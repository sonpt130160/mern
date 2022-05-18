const mongoose = require("mongoose");

const connectDatabase = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/todo", {
      useNewUrlParser: true,
    });
    console.log("connect successfully");
  } catch (error) {
    console.log("faild");
  }
};
module.exports = connectDatabase;
