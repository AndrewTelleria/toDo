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
    if (current.tasks.length === 0) {
      return (
      <form className="tasks-form">
        <ul className="tasks">
          <li><h3>Add a task :)</h3></li>
        </ul>
      </form>
      )
    }
    return (
      <form className="tasks-form">
        <ul className="tasks">
          {tasks}
        </ul>
      </form>
    );
  }
}

export default ToDoList;
