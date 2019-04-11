import React from 'react';
import AddTask from './AddTask';
import CompletedToDoList from './CompletedToDoList';
import ToDoList from './ToDoList';

class CompleteToDoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addTask: '',
      taskHistory: [{tasks:[]}],
      completedTasks: [{tasks:[]}]
    };

    this.handleAddTask = this.handleAddTask.bind(this);
    this.handleCompletedTask = this.handleCompletedTask.bind(this);
    this.handleTaskListUpdate = this.handleTaskListUpdate.bind(this);
    this.getHistory = this.getHistory.bind(this);
  }

  getHistory = (obj) => {
    const history = obj.slice();
    const current = history[history.length - 1];
    const tasks = current.tasks.slice();
    return tasks
  }

  handleAddTask(addTask) {
    this.setState({
      addTask: addTask
    });
  }

  handleCompletedTask(task) {
    const tasks = this.getHistory(this.state.taskHistory);
    const completedTasks = this.getHistory(this.state.completedTasks);

    for (let i = 0; i < tasks.length; i++) {
      if (task.description === tasks[i].description) {

        const index = tasks.indexOf(tasks[i]);
        tasks.splice(index, 1);
        completedTasks.push({description: task.description, complete: true})

        this.setState({
          taskHistory: this.state.taskHistory.concat([
            {tasks: tasks}
          ]),
          completedTasks: this.state.completedTasks.concat([
            {tasks: completedTasks}
          ])
        });
      }
    }
  }

  handleTaskListUpdate(task) {
    // It makes a copy of the original history
    // obj and another copy of the tasks value inside of the history obj.
    // It pushes the new task to the task array and concats it to the history's state
    // as a new obj.
    const tasks = this.getHistory(this.state.taskHistory);
    tasks.push({description: task, complete: false});
    this.setState({
      taskHistory: this.state.taskHistory.concat([
        {tasks: tasks}
      ]),
      addTask: ''
    });
  }

  render() {
    return (
      <div className="main">
        <h1>ToDo</h1>
        <div className="add-task">
          <h2>Add task</h2>
          <AddTask
            addTask={this.state.addTask}
            onAddTask={this.handleAddTask}
            onTaskListUpdate={this.handleTaskListUpdate} />
        </div>
        <div className="todo-list">
          <h2>ToDo list</h2>
          <ToDoList
            taskList={this.state.taskHistory}
            onCompletedTask={this.handleCompletedTask} />
        </div>
        <div className="todo-list-completed">
          <h2>Completed</h2>
          <CompletedToDoList
            completedTaskList={this.state.completedTasks} />
        </div>
      </div>
    );
  }
}

export default CompleteToDoList;
