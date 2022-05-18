import React from "react";
import AddTask from "./AddTask";
import {
  deleteTodoService,
  getAllTodosService,
  updateTodoService,
} from "../services/todoService";

export default class TaskList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ListTask: null,
      editTask: {},
    };
  }

  componentDidMount() {
    this.getAllData();
  }

  getAllData = () => {
    getAllTodosService().then((res) => {
      this.setState({
        ListTask: res.data,
      });
    });
  };

  handleEditTask = (todo) => {
    const { editTask } = this.state;
    const isEmpty = Object.keys(editTask).length === 0;
    if (!isEmpty && editTask._id === todo._id) {
      updateTodoService(todo._id, { task: editTask.task }).then((res) => {
        getAllTodosService().then((res) => {
          this.setState({
            ListTask: res.data,
            editTask: {},
          });
        });
      });
      return;
    }
    this.setState({
      editTask: todo,
    });
  };

  handleOnChangeEditTask = (event) => {
    const editTaskCopy = { ...this.state.editTask };
    editTaskCopy.task = event.target.value;
    this.setState({
      editTask: editTaskCopy,
    });
  };

  handleDeleteTask = (task) => {
    deleteTodoService(task._id).then((res) => {
      this.getAllData();
    });
  };

  render() {
    const { ListTask, editTask } = this.state;
    const isEmpty = Object.keys(editTask).length === 0;
    return (
      <>
        <AddTask ListTask={this.state.ListTask} getAllData={this.getAllData} />
        <div>
          <h2>Task List</h2>
          {ListTask &&
            ListTask.map((item, index) => {
              return (
                <div key={item._id}>
                  {isEmpty === true ? (
                    <span>{item.task}</span>
                  ) : (
                    <>
                      {editTask._id === item._id ? (
                        <span>
                          <input
                            onChange={(event) =>
                              this.handleOnChangeEditTask(event)
                            }
                            value={editTask.task}
                          />
                        </span>
                      ) : (
                        <span>{item.task}</span>
                      )}
                    </>
                  )}
                  <button onClick={() => this.handleEditTask(item)}>
                    {isEmpty === false && editTask._id === item._id
                      ? "save"
                      : "edit"}
                  </button>

                  <button
                    type="submit"
                    onClick={() => {
                      this.handleDeleteTask(item);
                    }}
                  >
                    Delete
                  </button>
                </div>
              );
            })}
        </div>
      </>
    );
  }
}
