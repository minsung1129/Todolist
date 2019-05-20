import React from 'react';
import './Todolisttemplate.css';

const TodoListTemplate = ({form, children}) => {
    
    return (
    <main className="todo-list-template">
      <div className="title">
        To Do List
      </div>
      <section className="form-wrapper">
        {form} 
        {console.log(form)}
      </section>
      <section className="todos-wrapper">
        { children }
      </section>
    </main>
  );
};

export default TodoListTemplate;