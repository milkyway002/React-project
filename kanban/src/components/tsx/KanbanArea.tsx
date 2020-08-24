import React from 'react';

import AddList from './AddList';
import PlusList from './PlusList';
import KanbanBox from './KanbanBox';
import '../css/KanbanArea.css';

import {KanbanAreaProps} from '../../module/type';

import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

const KanbanArea = ({
    List,
    State,
    onDeleteList,
    onAddList,
    onListClick,
    onChangeCard
}: KanbanAreaProps) => {
    return (
        <DndProvider backend={HTML5Backend}>
            <div className="kanbanArea-background">
                {List.map((Lists) => (
                    <KanbanBox
                        List={Lists}
                        State={State}
                        onDeleteList={onDeleteList}
                        onChangeCard={onChangeCard}
                        key={Lists.id}
                    ></KanbanBox>
                ))}
                {State.listState ? (<PlusList 
                                onListClick={onListClick}
                                onAddList={onAddList}
                            ></PlusList>) : (<AddList onListClick={onListClick}></AddList>)}
            </div>
        </DndProvider>
    );
};

export default KanbanArea;