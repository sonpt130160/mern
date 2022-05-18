import React from "react";
import { createTodoService } from "../services/todoService";

export default class AddTask extends React.Component {
  constructor(props) {
    console.log("con truc to");
    super(props);
    this.state = {
      task: "",
    };
  }
  handleAddTask = async () => {
    const body = {
      task: this.state.task,
    };
    await createTodoService(body);
    this.props.getAllData();
    this.setState({
      task: "",
    });
  };

  isChangeName = (e) => {
    this.setState({
      task: e.target.value,
    });
  };

  componentWillMount() {
    console.log("guyn mao");
  }

  componentDidMount() {
    console.log("dut mao");
  }

  componentWillUpdate(nextProps, nextState) {
    console.log("will update");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("dut up det");
  }

  componentWillUnmount() {
    console.log("will an mao");
  }

  render() {
    console.log("ren do");
    let { task } = this.state;
    return (
      <>
        <div>
          <h2>Add new task</h2>
          <div>
            <label>Name</label>
            <input
              type="text"
              placeholder="Enter name of task"
              value={task}
              onChange={(event) => this.isChangeName(event)}
            />
          </div>
          <button
            type="submit"
            onClick={() => {
              this.handleAddTask();
            }}
          >
            Add
          </button>
        </div>
      </>
    );
  }
}
