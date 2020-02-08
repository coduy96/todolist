import React, { Component } from 'react'
import './ToDoItem.css'
class ToDoItem extends Component {
  render() {
    const {item} = this.props;
    console.log(item);
    let className = "ToDoItem"
    if(item.isDone){
        className += " ToDoItem-done";
    
    }
    return (
        <div className={className}>
            <p>
                {this.props.item.title}
            </p>
        </div>
    )
  }
}

export default ToDoItem;