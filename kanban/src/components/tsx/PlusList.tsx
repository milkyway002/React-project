import React, { useState } from 'react'
import '../css/PlusList.css';

import { PlusListProps } from '../../module/type';

const PlusList = ({
    onListClick,
    onAddList
}: PlusListProps) => {
    const [value, setValue] = useState('');

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onListClick();
        onAddList(value);
        setValue('');
    }

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }

    return (
        <form onSubmit={onSubmit} className="PlusList-background">
            <div className="PlusList-context">
                <input onChange={onChange} value={value} className="PlusList-input"/>
                <button className="PlusList-btn">+</button>
            </div>
        </form>
    );
};

export default PlusList; 