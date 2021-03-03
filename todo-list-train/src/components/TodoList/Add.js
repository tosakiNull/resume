import React, { useState } from "react";
import { connect } from 'react-redux';
import { ADD_TODO } from '../../redux/actionType';

function Add(props) {
  const { addTask } = props;
  const [inputContent, setInputContent] = useState('');

  function handleInput(e) {
    setInputContent(e.target.value);
  }

  function handleAdd() {
    if(inputContent === '') {
      alert('please input content.');
      return;
    }

    addTask(inputContent);
    setInputContent('');
  }

  return (
    <div className="todo-add">
      <input type="text" value={inputContent} placeholder="Task" onChange={handleInput} />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

const addTask = (task) => ({
  type: ADD_TODO,
  payload: {
    task: task,
  },
})

const mapDispatchToProps = (dispatch) => ({
  addTask: (task) => dispatch(addTask(task)),
  dispatch,
});

export default connect(null, mapDispatchToProps)(Add);
