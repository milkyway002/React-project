import React from 'react';
import '../css/KanbanBoxAdd.css';
import { KanbanBoxAddProps } from '../../module/type';


const KanbanBoxAdd = ({
    setAddCard
}: KanbanBoxAddProps) => {

    const onBtnClick = () => {
        setAddCard(true);
    }

    return (
        <div className="KanbanBoxAdd-title" onClick={onBtnClick}>+</div>
    );
};

export default KanbanBoxAdd;