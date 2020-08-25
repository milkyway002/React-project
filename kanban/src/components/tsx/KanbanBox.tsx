import React, {useState} from 'react';
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
    const [isEdit, setIsEdit] = useState(false);
    const [{ isOver }, drop] = useDrop({
        accept: ItemTypes.KanbanCard,
        drop: () => onChangeCard(State.id, List.id),
        collect: monitor => ({
          isOver: !!monitor.isOver(),
        }),
      })

    const onDelClick = () => {
        onDeleteList(List.id);
    };

    const onEditClick = () => {
        if (isEdit) setIsEdit(false);
        else setIsEdit(true);
    }

    return (
        <div className="kanbanBox-background" ref={drop} style={{background: (isOver ? '#efefef' : 'none')}}>
            <div className="kanban-title">
                <div className="kanban-list-context">{ isEdit ? <input></input> : List.name}</div>
                <div className="kanban-edit-btn" onClick={onEditClick}>E</div>
                <div className="delete-btn" onClick={onDelClick}>X</div>
            </div>
            <div>
                <KanbanCardContainer List={List}></KanbanCardContainer>
            </div>
        </div>
    );
};

export default KanbanBox;