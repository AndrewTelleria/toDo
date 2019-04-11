import React from 'react';
import ToDoListItem from './ToDoListItem';

class ToDoList extends React.Component {
  render() {
    const current = this.props.taskList[this.props.taskList.length - 1];
    const tasks = [];
    for (let i = 0; i < current.tasks.length; i ++) {
      tasks.push(
        <ToDoListItem
          key={tasks.length}
          task={current.tasks[i]}
          onCompletedTask={this.props.onCompletedTask} />
      );
    }
    return (
      <form>
        <ul>
          {tasks}
        </ul>
      </form>
    );
  }
}

export default ToDoList;
