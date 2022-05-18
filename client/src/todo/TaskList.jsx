import React from "react";
import AddTask from "./AddTask";
import { deleteTodoService, getAllTodosService } from "../services/todoService";

export default class TaskList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ListTask: null,
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
      console.log(res);
    });
  };

  handleDeleteTask = async (task) => {
    deleteTodoService(task._id);
    this.getAllData();
  };

  render() {
    const { ListTask } = this.state;
    return (
      <>
        <AddTask ListTask={this.state.ListTask} getAllData={this.getAllData} />
        <div>
          <h2>Task List</h2>
          <table>
            <thead>
              <tr>
                <th>Name of task</th>
              </tr>
            </thead>
            <tbody>
              {ListTask &&
                ListTask.map((item, index) => {
                  return (
                    <tr key={item._id}>
                      <td>
                        {item.task}{" "}
                        <button
                          type="submit"
                          onClick={() => {
                            this.handleDeleteTask(item);
                          }}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}
