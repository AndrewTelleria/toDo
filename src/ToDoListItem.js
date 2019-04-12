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
        <div className="todo-list-item">
          <button onClick={this.handleCompletedTask}>
            Complete
          </button>
          {task}
        </div>
      </li>
    );
  }
}

export default ToDoListItem;
