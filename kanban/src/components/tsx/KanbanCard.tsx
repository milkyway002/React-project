import React from 'react';
import '../css/KanbanCard.css';

import { KanbanCardProps, ItemTypes } from '../../module/type';
import { useDrag } from 'react-dnd';

const KanbanCard = ({
    Kanban,
    onDeleteCard,
    onSetDragId,
    dragId
}: KanbanCardProps) => {
    
    const [{isDragging}, drag] = useDrag({
        item: {type: ItemTypes.KanbanCard},
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    });

    const onClick = () => {
        onDeleteCard(Kanban.id);
    };

    if (isDragging) onSetDragId(Kanban.id);

    return (
        <div className="KanbanCard-background" ref={drag} style={{opacity: isDragging ? 0.5 : 1}}>
            <div className="KanbanCard-context">
                {Kanban.text}
            <div className="KanbanCard-del-btn" onClick={onClick}>X</div>
            </div>
        </div>
    );
};

export default KanbanCard;