import React from 'react';

import KanbanArea from '../../components/tsx/KanbanArea';

import { RootState } from '../../module';
import { add_list, delete_list } from '../../module/List';
import {add_card, delete_card, change_group} from '../../module/kanban';

import { useSelector, useDispatch } from 'react-redux';

const KanbanAreaContainer = () => {
    const List = useSelector((state: RootState) => state.List);
    const Kanban = useSelector((state: RootState) => state.kanban);
    const dispatch = useDispatch();

    const onAddList = (name: string) => {
        dispatch(add_list(name));
    };

    const onDeleteList = (id: number) => {
        dispatch(delete_list(id));
    };

    const onAddCard = (text: string, group: string) => {
        dispatch(add_card(text, group));
    };

    const onDeleteCard = (id: number) => {
        dispatch(delete_card(id));
    };

    const onChangeCard = (id: number, group: string) => {
        dispatch(change_group(id, group));
    }

    return (
        <KanbanArea 
            List={List}
            Kanban={Kanban}
            onAddList={onAddList}
            onDeleteList={onDeleteList}
            onAddCard={onAddCard}
            onDeleteCard={onDeleteCard}
            onChangeCard={onChangeCard}
        ></KanbanArea>
    );
};

export default KanbanAreaContainer;