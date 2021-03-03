import { ADD_TODO, DEL_TODO, COMPLETED_TODO, CHANGE_SHOW_TYPE } from '../actionType';
import { ShowType } from '../../public/publicConst';

const initState = {
  showType: ShowType.ALL,
  nowLastId: null,
  list: {},
}

export default function todoReducer(state = initState, action) {
  const { nowLastId, list } = state;

  switch(action.type) {
    case ADD_TODO:
      const { task } = action.payload;
      const id = nowLastId !== null ? nowLastId + 1 : 0;

      return {
        ...state,
        nowLastId: id,
        list: {
          ...list,
          [id]: {
            task,
            completed: false,
          }
        },
      };
    case DEL_TODO:
      const { delId } = action;
      const copyList = { ...list };
      delete copyList[delId];

      return {
        ...state,
        list: {...copyList},
      };
    case COMPLETED_TODO:
      const { taskId } = action;

      return {
        ...state,
        list: {
          ...list,
          [taskId]: {
            ...list[taskId],
            completed: !list[taskId].completed,
          }
        },
      };
    case CHANGE_SHOW_TYPE:
      return {
        ...state,
        showType: action.changeType,
      };
    default:
      return state;
  }
}
