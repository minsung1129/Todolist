import React, { Component } from 'react';
import './Todoitem.css';

class TodoItem extends Component {
  
  static defaultProps = {
    todo: {
        text: '',
        text2: '',
        text3: 'X',
        text4: '',
        id: 0
    },
  }
    state = {
        editing: false,
        text: '',
        text2: '',
        text3: '',
        text4: ''
    }
    
      handleToggleEdit = () => {
        const { editing } = this.state;
        this.setState({ editing: !editing });
      }
    
      handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
          [name]: value
        });
      }
    
    
      componentDidUpdate(prevProps, prevState) {
        
        const { todo, onUpdate, id } = this.props;
        if(!prevState.editing && this.state.editing) {
         this.setState({
            text: todo.text,
            text2: todo.text2,
            text3: todo.text3,
            text4: todo.text4
          })
        }
    
        if (prevState.editing && !this.state.editing) {
          onUpdate( id, {
            text: this.state.text,
            text2: this.state.text2,
            text3: this.state.text3.replace('T',' '),
            text4: this.state.text4
          });
        
        }
      }
    
    render() {
    const { editing } = this.state;
    const {text, text2, text4, text3, checked, onToggle, onRemove, id, onUpdate } = this.props;
 
    if (editing) { 
        return (
            <div>
            <input
              value={this.state.text}
              name="text"
              placeholder="제목"
              onChange={this.handleChange}
            />
            <div></div>
            <input
              value={this.state.text2}
              name="text2"
              placeholder="내용"
              onChange={this.handleChange}
            />
            <div></div>
            <input
              type="datetime-local"
              value={this.state.text3}
              name="text3"
              placeholder="기한"
              onChange={this.handleChange}
            />
            
            <div>
            </div>
            <input
              type="number"
              value={this.state.text4}
              name="text4"
              placeholder="우선순위"
              onChange={this.handleChange}
            />

          <button onClick={this.handleToggleEdit}>적용</button>
          
          </div>
        );
      }
      
    return (
      
      <div className="todo-item" onClick={() => onToggle(id)}>
        <div className="remove" onClick={(e) => {
          e.stopPropagation(); 
          onRemove(id)}
        }>&times;</div> 
        <div className={`todo-text ${checked && `checked`}`}>
          <div>제목 : {text}</div>
          <div>내용 : {text2} </div>
          <div>기한 : {text3} </div>
          <div>우선순위 : {text4} </div>
          
        </div>
        <div className="create-button" onClick={(e) => {
          e.stopPropagation(); 
          this.handleToggleEdit() 
          }}>
        수정
        </div> 
        {
          checked && (<div className="check-mark">✓</div>)
        }
        
      </div>
    );
  }
}

export default TodoItem;