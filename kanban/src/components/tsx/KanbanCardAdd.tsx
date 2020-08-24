import React, { useState, useCallback } from 'react'
import '../css/KanbanCardAdd.css';

import { KanbanCardAddProps } from '../../module/type';

const KanbanCardAdd = ({
    List,
    setCardClick,
    onAddCard
}: KanbanCardAddProps) => {
    const [value, setValue] = useState('');

    const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }, []);

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setCardClick(false);
        onAddCard(value, List.id);
        setValue('');
    };

    return (
        <form className="kanbanCardAdd-background" onSubmit={onSubmit}>
            <div className="kanbanCardAdd-context">
                <input className="kanbanCardAdd-input" onChange={onChange} value={value}/>
                <button className="kanbanCardAdd-btn">+</button>
            </div>
        </form>
    );
};

export default KanbanCardAdd;