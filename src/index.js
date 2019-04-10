import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class ToDoListItem extends React.Component {
  render() {
    const task = this.props.task;
    return (
      <form>
        <input type="checkbox" />
        <li>
          {task}
        </li>
      </form>
    );
  }
}

class ToDoList extends React.Component {
  render() {
    const tasks = [];
    this.props.taskList.forEach((task) => {
      tasks.push(
        <ToDoListItem
          key={tasks.length}
          task={task.description} />
      );
    });
    return (
      <ul>
        {tasks}
      </ul>
    );
  }
}

class AddTask extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddTask = this.handleAddTask.bind(this);
    this.handleSubmitTask = this.handleSubmitTask.bind(this);
  }

  handleAddTask(e) {
    this.props.onAddTask(e.target.value);
  }

  handleSubmitTask(e) {
    e.preventDefault();
    this.props.onTaskListUpdate(this.refs.description.value);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmitTask}>
        <input
          type="text"
          placeholder="Add task..."
          ref="description"
          value={this.props.addTask}
          onChange={this.handleAddTask} />
        <input
          type="submit"
          value="Submit" />
      </form>
    )
  }
}

class CompleteToDoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addTask: '',
      completed: false,
      taskList: this.props.taskList
    };

    this.handleAddTask = this.handleAddTask.bind(this);
    this.handleCompletedTask = this.handleCompletedTask.bind(this);
    this.handleTaskListUpdate = this.handleTaskListUpdate.bind(this);
  }

  handleAddTask(addTask) {
    this.setState({
      addTask: addTask
    });
  }

  handleCompletedTask(completed) {
    this.setState({
      completed: completed
    });
  }

  handleTaskListUpdate(task) {
    this.state.taskList.push({description: task, completed: false});
    this.setState({
      taskList: this.state.taskList,
      addTask: ''
    });
  }

  render() {
    return (
      <div>
        <ToDoList
          taskList={this.state.taskList}
          completed={this.state.completed}
          onCompletedTask={this.handleCompletedTask} />
        <AddTask
          addTask={this.state.addTask}
          onAddTask={this.handleAddTask}
          onTaskListUpdate={this.handleTaskListUpdate} />
      </div>
    );
  }
}

const TASKS = [
  {description: "Complete React tutorial", complete: false},
  {description: "Finishing reading Blue Mind", complete: false},
  {description: "Call my parents", complete: false},
  {description: "Take the car for a walk", complete: false},
  {description: "Scale the apartment building", complete: false}
]

ReactDOM.render(
  <CompleteToDoList taskList={TASKS}/>,
  document.getElementById('root'));

