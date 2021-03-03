import React from "react";
import { connect } from 'react-redux';
import { CHANGE_SHOW_TYPE } from '../../redux/actionType';
import { ShowType } from '../../public/publicConst';

function Item(props) {
  const { txt, count, changeClick } = props

  return (
    <div className="todo-tab-item" onClick={changeClick}>
      <h2>{count}</h2>
      <span>{txt}</span>
    </div>
  );
}

function CountTab(props) {
  const {
    allCount,
    completedCount,
    IncompleteCount,
    onChangeShowType,
  } = props;

  return (
    <div className="todo-tab">
      <Item txt="All" count={allCount} changeClick={() => onChangeShowType(ShowType.ALL)} />
      <Item txt="Completed" count={completedCount} changeClick={() => onChangeShowType(ShowType.COMPLETED)} />
      <Item txt="Incomplete" count={IncompleteCount} changeClick={() => onChangeShowType(ShowType.INCOMPLETE)} />
    </div>
  );
}

const changeShowType = (showType) => ({
  type: CHANGE_SHOW_TYPE,
  changeType: showType,
});

const mapStateToProps = (state) => {
  const { list } =  state;

  return {
    allCount: Object.keys(list).length,
    completedCount: Object.keys(list).filter((id) => list[id].completed).length,
    IncompleteCount: Object.keys(list).filter((id) => !list[id].completed).length,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onChangeShowType: (showType) => dispatch(changeShowType(showType)),
  dispatch,
});

export default connect(mapStateToProps, mapDispatchToProps)(CountTab);
