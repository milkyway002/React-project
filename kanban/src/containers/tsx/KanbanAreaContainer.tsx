import React from 'react';

import KanbanArea from '../../components/tsx/KanbanArea';

import { RootState } from '../../module';
import { add_list, delete_list } from '../../module/List';
import { set_list_state } from '../../module/StateControl';
import {change_group} from '../../module/kanban';

import { useSelector, useDispatch } from 'react-redux';

const KanbanAreaContainer = () => {
    const List = useSelector((state: RootState) => state.List);
    const State = useSelector((state: RootState) => state.StateControl);
    const dispatch = useDispatch();

    const onAddList = (name: string) => {
        dispatch(add_list(name));
    };

    const onDeleteList = (id: number) => {
        dispatch(delete_list(id));
    };

    const onChangeCard = (id: number, group: number) => {
        dispatch(change_group(id, group));
    }

    const onListClick = () => {
        dispatch(set_list_state());
    }

    return (
        <KanbanArea 
            List={List}
            State={State}
            onAddList={onAddList}
            onDeleteList={onDeleteList}
            onListClick={onListClick}
            onChangeCard={onChangeCard}
        ></KanbanArea>
    );
};

export default KanbanAreaContainer;