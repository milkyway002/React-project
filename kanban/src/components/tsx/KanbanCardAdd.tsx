import React, { useState, useRef, useCallback } from 'react'
import '../css/KanbanCardAdd.css';

import { KanbanCardAddProps } from '../../module/type';

const KanbanCardAdd = ({
    List,
    setAddCard,
    onAddCard
}: KanbanCardAddProps) => {
    const [value, setValue] = useState('');

    const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }, []);

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setAddCard(false);
        onAddCard(value, List.name);
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