import { List } from './List'; 
import { SetStateAction } from 'react';
import { Kanban } from './kanban';

export type KanbanAreaProps = {
    List: List[];
    Kanban: Kanban[];
    onDeleteList: (id: number) => void;
    onAddList: (name: string) => void;
    onAddCard: (text: string, group: string) => void;
    onDeleteCard: (id: number) => void;
    onChangeCard: (id: number, group: string) => void;
};

export type KanbanBoxProps = {
    List: List;
    Kanban: Kanban[];
    onDeleteList: (id: number) => void;
    onAddCard: (text: string, group: string) => void;
    onDeleteCard: (id: number) => void;
    onChangeCard: (id: number, group: string) => void;
};

export type AddListProps = {
    onBtnClick: React.Dispatch<SetStateAction<boolean>>;
};

export type PlusListProps = {
    onBtnClick: React.Dispatch<SetStateAction<boolean>>;
    onAddList: (name: string) => void;
};

export type KanbanBoxAddProps = {
    setAddCard: React.Dispatch<SetStateAction<boolean>>;
};

export type KanbanCardAddProps = {
    List: List;
    setAddCard: React.Dispatch<SetStateAction<boolean>>;
    onAddCard: (text: string, group: string) => void;
};

export type KanbanCardProps = {
    Kanban: Kanban;
    onDeleteCard: (id: number) => void;
    onSetDragId: React.Dispatch<SetStateAction<number>>;
    dragId: number;
};

export const ItemTypes = {
    KanbanCard: 'KanbanCard'
};