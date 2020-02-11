import React, { Component } from "react";
import TodoItems from "./todoItem";
import produce from "immer";
const { fromJS } = require("immutable");

class todoList extends Component {
  state = {
    value: "",
    todos: [
      {
        text: "Buy Milk",
        completed: false
      },
      {
        text: "Deliver Seminar",
        completed: false
      }
    ]
  };

  toggleComplete = index => {
    console.log("index", index);
    const newTodo = fromJS(this.state.todos);
    console.log("New todo", newTodo);

    let newObj = newTodo.map((todo, i) => {
      if (index == i) {
        let value = todo.get("completed");
        let changedTodo = todo.set("completed", !value);
        console.log("changed todo", changedTodo.toArray());
        return changedTodo;
      }
      return todo;
      // console.log(todo.get("completed"), i);
    });

    let realTodo = newObj.toJS();
    // const newtodo = this.state.todos.map((todo, i) => {
    //   if (index == i) {
    //     return {
    //       ...todo,
    //       completed: !todo.completed
    //     };
    //   }
    //   return todo;
    // });
    console.log("real todo", realTodo);

    this.setState({
      todos: realTodo
    });
    console.log("new todo", this.state.todos);
  };
  deleteToDo = index => {
    const newTodo = produce(this.state.todos, draftState => {
      draftState.splice(index, 1);
    });
    console.log("newTodo", newTodo);
    this.setState({
      todos: newTodo
    });
    // const newtodo = this.state.todos.filter((todo, i) => {
    //   if (index == i) {
    //     return false;
    //   }
    //   return true;
    // });
  };

  addTodo = e => {
    e.preventDefault();
    const newtodo = this.state.todos.concat({
      text: e.target.inputText.value,
      completed: false
    });
    e.target.inputText.value = null;
    this.setState({
      todos: newtodo
    });
  };
  render() {
    return (
      <div>
        <TodoItems
          {...this.state}
          deleteToDo={this.deleteToDo}
          toggleComplete={this.toggleComplete}
          addTodo={this.addTodo}
        />
      </div>
    );
  }
}

export default todoList;
