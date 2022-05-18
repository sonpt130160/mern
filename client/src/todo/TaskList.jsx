import React from "react";
import TodoList from "./TodoList";
import AddTask from "./AddTask";

export default class TaskList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task: ["task 1", "task 2"],
    };
  }

  addTask = (name) => {
    this.setState({
      task: [...this.state.task, name],
    });
  };
  handleDeleteTask = (index) => {
    const filterTask = this.state.task;
    // eslint-disable-next-line no-const-assign
    const taskFilter = filterTask.filter((item,idx)=>idx !== index)
    console.log(taskFilter)
    this.setState({
      task: taskFilter,
    });
  };

  render() {
    const {task} = this.state
    return (
      <>
        <AddTask addTask={this.addTask} />
        <div>
          <h2>Task List</h2>
          <table>
            <thead>
              <tr>
                <th>Name of task</th>
              </tr>
            </thead>
            <tbody>
              {task.map((name, index) =>{
                return (
                  <div  key={index}>
                    <TodoList name={name} />
                    <button
                      type="submit"
                      onClick={() => this.handleDeleteTask(index)}
                    >
                      Delete
                    </button>
                  </div>
                );
              })}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}
