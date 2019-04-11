import React from 'react';

class ToDoListItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleCompletedTask = this.handleCompletedTask.bind(this);
  }

  handleCompletedTask(e) {
    this.props.onCompletedTask(this.props.task);
    e.preventDefault();
  }

  render() {
    const task = this.props.task.description;
    return (
      <li>
        <button onClick={this.handleCompletedTask}>
          Complete
        </button>
        {task}
      </li>
    );
  }
}

export default ToDoListItem;
