import React from 'react';
import List from './List';
import CreateButton from './CreateButton';
import uuid from 'uuid';
import TodoAction from '../actions/TodoAction';
import TodoStore from '../stores/TodoStore';

class Todo extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      todos: TodoStore.getAll()
    }
    this.createTodo = this.createTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    TodoStore.addChangeListener(this.onChange);
  }

  componentWillUnmount() {
    TodoStore.removeChangeLister(this.onChange);
  }

  onChange() {
    this.setState({
      todos: TodoStore.getAll()
    })
  }

  createTodo(todo) {
    TodoAction.create({
      id: uuid.v4(),
      content: '3rd stuff'
    });
  }

  deleteTodo(id) {
    TodoAction.delete(id)
  }

  render() {
    return (
      <div className="todo-component">
        <List items={this.state.todos} onDelete={this.deleteTodo}/>
        <CreateButton onClick={this.createTodo}/>
      </div>
    )
  }
}

export default Todo;