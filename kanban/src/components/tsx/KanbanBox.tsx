import React from 'react';
import '../css/KanbanBox.css';

import { KanbanBoxProps, ItemTypes } from '../../module/type';
import KanbanCardContainer from '../../containers/tsx/KanbanCardContainer';

import { useDrop } from 'react-dnd';

const KanbanBox = ({
    List,
    State,
    onDeleteList,
    onChangeCard
}: KanbanBoxProps) => {
    const [{ isOver }, drop] = useDrop({
        accept: ItemTypes.KanbanCard,
        drop: () => onChangeCard(State.id, List.id),
        collect: monitor => ({
          isOver: !!monitor.isOver(),
        }),
      })

    const onClick = () => {
        onDeleteList(List.id);
    };

    return (
        <div className="kanbanBox-background" ref={drop} style={{background: (isOver ? '#efefef' : 'none')}}>
            <div className="kanban-title">
                {List.name}
                <div className="delete-btn" onClick={onClick}>X</div>
            </div>
            <div>
                <KanbanCardContainer List={List}></KanbanCardContainer>
            </div>
        </div>
    );
};

export default KanbanBox;