import React from 'react';

class CompletedToDoListItem extends React.Component {
  render() {
    const task = this.props.task.description;
    return (
      <div className="completed-todo-list-item">
      <li className="completed-task">
        {task}
      </li>
      </div>
    )
  }
}

export default CompletedToDoListItem;
