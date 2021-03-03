import React from "react";
import { connect } from 'react-redux';
import { DEL_TODO, COMPLETED_TODO } from '../../redux/actionType';
import { ShowType } from '../../public/publicConst';

function Item(props) {
  const {
    task,
    onDel,
    completed,
    onCompleted,
  } = props;

  const completedStyle = completed ? 'completed' : '';

  return (
    <div className={`list-item ${completedStyle}`}>
      <div className="check-btn">
        <input
          type="checkbox"
          checked={completed}
          onChange={onCompleted}
        />
      </div>
      <div className="title">{task}</div>
      <div className="group-btn">
        {/* <button>edit</button> */}
        <button onClick={onDel}>delete</button>
      </div>
    </div>
  );
}

function List(props) {
  const { list, delTask, completedTask } = props;
  const itemList = Object.keys(list).map((id) => (
    <Item
      key={id}
      task={list[id].task}
      onDel={() => delTask(id)}
      completed={list[id].completed}
      onCompleted={() => completedTask(id)}
    />
  ))

  return (
    <div className="todo-list">
      {itemList}
    </div>
  );
}

const delTask = (id) => ({
  type: DEL_TODO,
  delId: id,
});

const completedTask = (id) => ({
  type: COMPLETED_TODO,
  taskId: id,
});

const mapStateToProps = (state) => {
  const { list, showType } = state;
  let newList = { ...list };

  // TODO: 這裏做filter的動作
  if (showType === ShowType.COMPLETED) {
    newList = Object.keys(list)
      .filter((id) => list[id].completed)
      .map((id) => ({ ...list[id] }));
  }
  if (showType === ShowType.INCOMPLETE) {
    newList = Object.keys(list)
      .filter((id) => !list[id].completed)
      .map((id) => ({ ...list[id] }));;
  }

  console.log(newList);

  return { list: newList };
}

const mapDispatchToProps = (dispatch) => ({
  delTask: (id) => dispatch(delTask(id)),
  completedTask: (id) => dispatch(completedTask(id)),
  dispatch,
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
