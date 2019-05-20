import React, { Component } from 'react';
import TodoItem from './Todoitem';

class TodoItemList extends Component {
  render() {
    const { todos, onToggle, onRemove, onUpdate } = this.props;
    
    const todoList = todos.map(
        ({id, text, text2, text3, text4, checked}) => (
          <TodoItem
            id={id}
            text={text}
            text2={text2}
            text3={text3}
            text4={text4}
            checked={checked}
            onToggle={onToggle}
            onRemove={onRemove}
            onUpdate={onUpdate}
            key={id}
          />
        )
      );

    return (
        <div>
            {todoList}    
        </div>
    );
  }
}

export default TodoItemList;