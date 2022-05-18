import React from "react";

export default class TodoList extends React.Component {
  render() {
    return (
      <tr>
        <td>{this.props.name}</td>
      </tr>
    );
  }
}
