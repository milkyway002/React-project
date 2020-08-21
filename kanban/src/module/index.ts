import { combineReducers } from 'redux';

import kanban from './kanban';
import List from './List';

const RootReducer = combineReducers({
    kanban,
    List
});

export default RootReducer;

export type RootState = ReturnType<typeof RootReducer>