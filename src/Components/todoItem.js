import React, { Component } from "react";
import style from "./../style.css";

export class todoItem extends Component {
  state = {
    edit: true,
    delete: false,
    decoration: "none"
  };
  //   setDecoration = () => {
  //     this.setState({
  //       decoration: this.state.props.decoration == "none" ? "line-through" : "none."
  //     });
  //   };
  render() {
    console.log(this.props);
    return (
      <div className="todoStyle">
        <h3 style={{ marginLeft: 15 }}>Todo App</h3>
        {this.props.todos.map((todo, index) => (
          <div>
            {todo.text ? (
              <div className="eachTask">
                <p
                  onClick={e => this.props.toggleComplete(index)}
                  style={{
                    textDecoration: todo.completed ? "line-through" : "none"
                  }}
                >
                  {todo.text}
                </p>
                <button
                  className="eachButton"
                  onClick={e => this.props.deleteToDo(index)}
                >
                  Complete
                </button>
              </div>
            ) : (
              <div className="task">
                {" "}
                <form>
                  <input name="inputText" />
                  <button>Save</button>
                  <button>Cancel</button>
                </form>{" "}
              </div>
            )}
          </div>
        ))}
        <form onSubmit={e => this.props.addTodo(e)} className="task">
          <input name="inputText" required />
          <button>Add</button>
        </form>
      </div>
    );
  }
}

export default todoItem;
