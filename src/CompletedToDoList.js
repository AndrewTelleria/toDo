import React from 'react';
import CompletedToDoListItem from './CompletedToDoListItem';

class CompletedToDoList extends React.Component {
  render() {
    const current = this.props.completedTaskList[this.props.completedTaskList.length - 1]
    const tasks = [];
    for (let i = 0; i < current.tasks.length; i++){
      tasks.push(
        <CompletedToDoListItem
        key={tasks.length}
        task={current.tasks[i]} />
      )
    }
    if (current.tasks.length === 0) {
      return (
        <ul className="completed-tasks">
          <h3>No Completed Tasks</h3>
        </ul>
      )
    }
    return(
      <ul className="completed-tasks">
        {tasks}
      </ul>
    )
  }
}

export default CompletedToDoList;
