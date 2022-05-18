import React from "react";

export default class AddTask extends React.Component {
  constructor(props) {
    console.log("con truc to")
    super(props);
    this.state = {
      name: '',
    };
  }
  handleAddTask = () => {
    this.props.addTask(this.state.name);
  };

  isChangeName = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  componentWillMount() {
    console.log("guyn mao")
  }

  componentDidMount() {
    console.log("dut mao")
  }

  shouldComponentUpdate(nextProps, nextState) {
    if(this.state.name !== this.state.nextState){
      return true;
    }
    return false
  }

  componentWillUpdate(nextProps, nextState) {
    console.log("will update")
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("dut up det")
  }

  componentWillUnmount() {
    console.log("will an mao")
  }

  render() {
    console.log("ren do")
    return (
      <>
        <div>
            <h2>Add new task</h2>
            <div>
                <label >Name</label>
                <input type="text" placeholder="Enter name of task" onChange={(event)=>this.isChangeName(event)} />
            </div>
            <button type="submit" onClick={()=> this.handleAddTask()}>Add</button>
        </div>
      </>
    );
  }
}

