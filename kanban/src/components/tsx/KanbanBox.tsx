import React, {useState} from 'react';
import '../css/KanbanBox.css';

import { KanbanBoxProps, ItemTypes } from '../../module/type';
import KanbanCardContainer from '../../containers/tsx/KanbanCardContainer';

import { useDrop } from 'react-dnd';
import { edit_list } from '../../module/List';

const KanbanBox = ({
    List,
    State,
    onDeleteList,
    onChangeCard,
    onEditList
}: KanbanBoxProps) => {
    const [isEdit, setIsEdit] = useState(false);
    const [editVal, setEditVal] = useState(List.name);
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
        if (isEdit) {
            setIsEdit(false);
            onEditList(List.id, editVal);
        } else setIsEdit(true);
    };

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEditVal(e.target.value);
    }

    return (
        <div className="kanbanBox-background" ref={drop} style={{background: (isOver ? '#efefef' : 'none')}}>
            <div className="kanban-title">
                <div className="kanban-list-context">{ isEdit ? 
                    <input value={editVal} className="kanban-edit-input" onChange={onInputChange}></input> : List.name}</div>
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