import React from 'react';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: ''
    }

    this.updateTitle = this.updateTitle.bind(this)
    this.updateBody = this.updateBody.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  updateTitle(e) {
    this.setState({title: e.currentTarget.value});
    // setTimeout(console.log(this.state), 500)
    // console.log(this.state);
  }

  updateBody(e) {
    this.setState({body: e.currentTarget.value});
    // console.log(this.state);
  }

  uniqueId() {
    return new Date().getTime();
  }

  todoGenerator() {
    return {
      id: this.uniqueId(),
      title: this.state.title,
      body: this.state.body,
      done: false,
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.receiveTodo(this.todoGenerator());
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Title
          <input onChange={this.updateTitle} value={this.state.title}></input>
        </label>

        <br></br>
        
        <label>Body
          <input onChange={this.updateBody} value={this.state.body}></input>
        </label>

        <br></br>

        <input type="submit" value="Create a Todo"></input>
      </form>
    );
  }
}

export default TodoForm;