import React from 'react';
import '../css/KanbanBoxAdd.css';
import { KanbanBoxAddProps } from '../../module/type';


const KanbanBoxAdd = ({
    setCardClick
}: KanbanBoxAddProps) => {

    const onBtnClick = () => {
        setCardClick(true);
    }

    return (
        <div className="KanbanBoxAdd-title" onClick={onBtnClick}>+</div>
    );
};

export default KanbanBoxAdd;