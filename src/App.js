import React, { Component } from 'react';
import TodoListTemplate from './compo/Todolisttemplate.js';
import Form from './compo/Form.js';
import TodoItemList from './compo/Todoitemlist.js';

class App extends Component {

  id = 8
  state = {
    input: '',
    input2: '',
    input3: 'X',
    input4: '',
    todos: [
      { id: 0, text: ' 새로운 TODO(제목과 내용)를 작성할 수 있다.', text2: '일', text3: "2019-05-16 14:00", text4:'1', checked: true },
      { id: 1, text: ' TODO 목록을 볼 수 있다.', text2: '이', text3: "2019-05-16 14:00", text4:'2', checked: true },
      { id: 2, text: ' TODO 항목의 제목과 내용을 수정할 수 있다.', text2: '삼', text3: "2019-05-16 14:00", text4:'3',checked: true },
      { id: 3, text: ' TODO 항목을 삭제할 수 있다.', text2: '사', text3: "2019-05-16 14:00", text4:'4',checked: true },
      { id: 4, text: ' 사용자의 선택에 의해 TODO에는 마감 기한을 넣을 수 있다.', text2: '오', text3: "2019-05-16 14:00", text4:'5',checked: true },
      { id: 5, text: ' TODO 항목의 우선순위를 설정 및 조절할 수 있다.', text2: '육', text3: "2019-05-16 14:00", text4:'6',checked: true },
      { id: 6, text: ' TODO 항목에 대한 완료 처리를 할 수 있다.', text2: '칠', text3: "2019-05-16 14:00", text4:'7',checked: true },
      { id: 7, text: ' 마감기한이 지난 TODO에 대해 알림을 노출할 수 있다.', text2: '팔', text3: "2019-05-16 14:00", text4:'8',checked: false }
    ]
  }


  handleChange = (e) => {
    this.setState({
      input: e.target.value, 
    });
  }

  handleChange2 = (e) => {
    this.setState({
      input2: e.target.value
    });
  }

  handleChange3 = (e) => {
    
    this.setState({
      input3: e.target.value,
    });
    
    
  }

  handleChange4 = (e) => {
    this.setState({
      input4: e.target.value
    });
  }

  handleCreate = () => {
    const { input, input2, input3, input4, todos } = this.state;
    this.setState({
      input: '', 
      input2: '', 
      input3: 'X',
      input4: '',
      todos: todos.concat({
        id: this.id++,
        text: input,
        text2: input2,
        text3: input3.replace('T',' '),
        text4: input4,
        checked: false
      })
    });
    var st_date = new Date().getFullYear() + '-0' + new Date().getMonth() + '-' + new Date().getDate()
              + ' ' + new Date().getHours() +':' + new Date().getMinutes();
    {this.state.input3 < st_date ? alert(input +'이(가) 마감되었습니다.') : alert(input +'이(가) 등록되었습니다.') }
  }

  handleKeyPress = (e) => {
    if(e.key === 'Enter') {
      this.handleCreate();
    }
  }

  handleToggle = (id) => {
    const { todos } = this.state;

    const index = todos.findIndex(todo => todo.id === id);
    const selected = todos[index]; 
    const nextTodos = [...todos]; 
        nextTodos[index] = { 
      ...selected, 
      checked: !selected.checked
    };

    this.setState({
      todos: nextTodos
    });
  }

  handleRemove = (id) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter(todo => todo.id !== id)
    });
  }

  handleUpdate = (id, data) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.map(
        todo => todo.id === id
          ? { ...todo, ...data } 
          : todo 
      )
    })
  }

  render() {
    const { input, input2, input3, input4, todos } = this.state;
    const {
      handleChange,
      handleChange2,
      handleChange3,
      handleChange4,
      handleCreate,
      handleKeyPress,
      handleToggle,
      handleRemove,
      handleUpdate
    } = this;

    return (
      
      <TodoListTemplate form={(
        <Form 
          value={input}
          value2={input2}
          value3={input3}
          value4={input4}
          onKeyPress={handleKeyPress}
          onChange={handleChange}
          onChange2={handleChange2}
          onChange3={handleChange3}
          onChange4={handleChange4}
          onCreate={handleCreate}
        />
      )}>
      
      <TodoItemList 
          todos={todos} 
          onToggle={handleToggle} 
          onRemove={handleRemove} 
          onUpdate={handleUpdate}
          onChange={handleChange}
          onChange2={handleChange2}
          onChange3={handleChange3}
          onChange4={handleChange4}
          value={input}
          value2={input2}
          value3={input3}
          value4={input4}
      />
      </TodoListTemplate> 
   
    );
  }
}

export default App;