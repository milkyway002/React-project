import { combineReducers } from 'redux';

import kanban from './kanban';
import List from './List';
import StateControl from './StateControl';

const RootReducer = combineReducers({
    kanban,
    List,
    StateControl
});

export default RootReducer;

export type RootState = ReturnType<typeof RootReducer>