import React from 'react';

import TodoList from './components/TodoComponents/TodoList';
// import TodoForm from './components/TodoComponents/TodoForm';

const todoItems = [
  {task: "Lorem ipsum dolor sit amet 1", id: 1, comppleted: false},
  {task: "Lorem ipsum dolor sit amet 2", id: 2, comppleted: false},
  {task: "Lorem ipsum dolor sit amet 3", id: 3, comppleted: false},
  {task: "Lorem ipsum dolor sit amet 4", id: 4, comppleted: false},
  {task: "Lorem ipsum dolor sit amet 5", id: 5, comppleted: false}
];



class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor () {
    super();
    this.state = {
      todoList: todoItems,
      task: ""
    };
  };

  changeHandler = e => {
    this.setState({
      [e.target.name] : e.target.value
    });
  };

  addNewItem = e => {
    e.preventDefault();
    this.setState({
      todoList: 
      [ ...this.state.todoList,
        {task: this.state.task}],
        task: ""
    });
  };

  render() {
    return (
      <div>
        <h1>Todo List:</h1>
        <TodoList todoDataList={this.state.todoList} />
        {/* <TodoForm addNewItem={this.addNewItem} 
        changeHandler={this.changeHandler} 
        task={this.state.task} /> */}
      </div>
    );
  };
};

export default App;
