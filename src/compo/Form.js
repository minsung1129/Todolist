import React from 'react';
import './Form.css';

const Form = ({value, value2, value3, value4, onChange, onChange2, onChange3, onChange4, onCreate, onKeyPress}) => {
    return (
    <div className="form">
      <div>
      제목 : <input value={value} onChange={onChange} onKeyPress={onKeyPress} />
      내용 : <input value={value2} onChange={onChange2} onKeyPress={onKeyPress}/>
      </div>
      <div>
        기한 : <input type="datetime-local" value={value3} onChange={onChange3} />
        우선순위 : <input type="number" value={value4} onChange={onChange4}/>
      </div>
      <div className="create-button" onClick={onCreate}>
        추가
      </div>   
    </div>

  );
};

export default Form;