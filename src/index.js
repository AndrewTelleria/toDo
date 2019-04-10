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
    this.props.tasks.forEach((task) => {
      tasks.push(
        <ToDoListItem
          key={tasks.length}
          task={task.description} />
      )
    });
    return (
      <ul>
        {tasks}
      </ul>
    );
  }
}

class AddTask extends React.Component {
  render() {
    return (
      <form>
        <input type="text" placeholder="Add task..." />
        <input type="submit" value="Submit" />
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
      taskList: this.props.tasks
    }
  }
  render() {
    return (
      <div>
        <ToDoList tasks={this.props.tasks} />
        <AddTask />
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
  <CompleteToDoList tasks={TASKS}/>,
  document.getElementById('root'));

