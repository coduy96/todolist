import React, { Component } from "react";
import "./App.css";
import ToDoItem from "./components/ToDoItem";

class App extends Component {
  constructor (){
    super();
    this.toDoItem = [
      // {title:'Learn new thing', isDone: true},
      // {title:'Work with a heart', isDone: false},
      // {title:'Help people', isDone: false}
    ];
  }
  render() {
    return (
      <div className="App">
        {
          this.toDoItem.length > 0 && this.toDoItem.map((item,index) => <ToDoItem key={index} item={item}/>)
        }
        {
          this.toDoItem.length === 0 && 'Nothing here'
        }
      </div>
    );
  }
}

export default App;
