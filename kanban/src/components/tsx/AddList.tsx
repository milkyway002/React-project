import React from 'react';
import '../css/AddList.css';

import {AddListProps} from '../../module/type';

const AddList = ({
    onBtnClick
}: AddListProps) => {

    const onSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onBtnClick(true);
    }

    return (
        <form className="AddList-background" onSubmit={onSubmit}> 
            <div className="addList-title">
                Add List
                <button className="addList-btn">+</button>
            </div>
        </form>
    );
};

export default AddList;