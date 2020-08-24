import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { RootState } from '../../module';
import {add_card, delete_card } from '../../module/kanban';
import { set_card_id } from '../../module/StateControl';

import KanbanCardAdd from '../../components/tsx/KanbanCardAdd';
import KanbanCard from '../../components/tsx/KanbanCard';
import KanbanBoxAdd from '../../components/tsx/KanbanBoxAdd';

import { KanbanCardContainerProps } from '../../module/type';


const KanbanCardContainer = ({
    List
}: KanbanCardContainerProps) => {
    const [cardClick, setCardClick] = useState(false);
    const Kanban = useSelector((state: RootState) => state.kanban);
    const dispatch = useDispatch();

    const onAddCard = (text: string, group: number) => {
        dispatch(add_card(text, group));
    };

    const onDeleteCard = (id: number) => {
        dispatch(delete_card(id));
    };

    const onChangeId = (id :number) => {
        dispatch(set_card_id(id));
    };

    return (
        <>
            <KanbanBoxAdd setCardClick={setCardClick}></KanbanBoxAdd>
            {Kanban.map(Kanbans => (
                Kanbans.group === List.id ? <KanbanCard 
                                                Kanban={Kanbans}
                                                onDeleteCard={onDeleteCard}
                                                onChangeId={onChangeId}
                                                key={Kanbans.id}
                                                ></KanbanCard> : null))}
            {cardClick ? (<KanbanCardAdd  
                                        List={List}
                                        setCardClick={setCardClick}
                                        onAddCard={onAddCard}
                                ></KanbanCardAdd>) : null}
        </>
    );
};

export default KanbanCardContainer;