import React from 'react';

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

export default AddTask;
