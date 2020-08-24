import React, { useRef } from 'react';
import '../css/KanbanCard.css';

import { KanbanCardProps, ItemTypes } from '../../module/type';
import { useDrag } from 'react-dnd';

const KanbanCard = ({
    Kanban,
    onDeleteCard,
    onChangeId,
}: KanbanCardProps) => {
    const cnt = useRef(0);
    
    const [{isDragging}, drag] = useDrag({
        item: {type: ItemTypes.KanbanCard},
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    });

    const onClick = () => {
        onDeleteCard(Kanban.id);
    };

    if (isDragging) {
        cnt.current++;
        if (cnt.current < 2) {
            console.log('Change!');
            onChangeId(Kanban.id);
        }
    } else {
        cnt.current = 0;
    }

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