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
    return(
      <ul>
        {tasks}
      </ul>
    )
  }
}

export default CompletedToDoList;
