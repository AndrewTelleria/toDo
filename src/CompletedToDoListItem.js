import React from 'react';

class CompletedToDoListItem extends React.Component {
  render() {
    const task = this.props.task.description;
    return (
      <li>
        {task}
      </li>
    )
  }
}

export default CompletedToDoListItem;
