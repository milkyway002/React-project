import React, { useState } from 'react';

import AddList from './AddList';
import PlusList from './PlusList';
import KanbanBox from './KanbanBox';
import '../css/KanbanArea.css';

import {KanbanAreaProps} from '../../module/type';

import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

const KanbanArea = ({
    List,
    Kanban,
    onDeleteList,
    onAddList,
    onAddCard,
    onDeleteCard,
    onChangeCard
}: KanbanAreaProps) => {
    const [isClick, setIsClick] = useState(false);

    return (
        <DndProvider backend={HTML5Backend}>
            <div className="kanbanArea-background">
                {List.map((Lists) => (
                    <KanbanBox
                        List={Lists}
                        Kanban={Kanban}
                        onDeleteList={onDeleteList}
                        onAddCard={onAddCard}
                        onDeleteCard={onDeleteCard}
                        onChangeCard={onChangeCard}
                        key={Lists.id}
                    ></KanbanBox>
                ))}
                {isClick ? (<PlusList 
                                onBtnClick={setIsClick}
                                onAddList={onAddList}
                            ></PlusList>) : (<AddList onBtnClick={setIsClick}></AddList>)}
            </div>
        </DndProvider>
    );
};

export default KanbanArea;