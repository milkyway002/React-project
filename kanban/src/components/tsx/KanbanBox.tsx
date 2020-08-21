import React, { useState } from 'react';
import '../css/KanbanBox.css';

import { KanbanBoxProps, ItemTypes } from '../../module/type';

import KanbanBoxAdd from './KanbanBoxAdd';
import KanbanCardAdd from './KanbanCardAdd';
import KanbanCard from './KanbanCard';

import { useDrop } from 'react-dnd';

const KanbanBox = ({
    List,
    Kanban,
    onDeleteList,
    onAddCard,
    onDeleteCard,
    onChangeCard
}: KanbanBoxProps) => {
    const [dragId, setDragId] = useState(1);
    const [addCard, setAddCard] = useState(false);

    const [{ isOver }, drop] = useDrop({
        accept: ItemTypes.KanbanCard,
        drop: () => onChangeCard(dragId, List.name),
        collect: monitor => ({
          isOver: !!monitor.isOver(),
        }),
      })

    const onClick = () => {
        onDeleteList(List.id);
    };

    const onChangeDragId = (id: number) => {
        setDragId(id);
    };

    return (
        <div className="kanbanBox-background" ref={drop} style={{background: (isOver ? '#efefef' : 'none')}}>
            <div className="kanban-title">
                {List.name}
                <div className="delete-btn" onClick={onClick}>X</div>
            </div>
            <div>
                <KanbanBoxAdd setAddCard={setAddCard}></KanbanBoxAdd>
                {Kanban.map(Kanbans => (
                    Kanbans.group === List.name ? <KanbanCard 
                                                    Kanban={Kanbans}
                                                    onDeleteCard={onDeleteCard}
                                                    onSetDragId={setDragId}
                                                    onChangeDragId={onChangeDragId}
                                                    dragId={dragId}
                                                    key={Kanbans.id}
                                                    ></KanbanCard> : null))}
                {addCard ? (<KanbanCardAdd  List={List}
                                            setAddCard={setAddCard}
                                            onAddCard={onAddCard}
                            ></KanbanCardAdd>) : null}
            </div>
        </div>
    );
};

export default KanbanBox;