import { List } from './List'; 
import { Kanban } from './kanban';
import { state } from './StateControl';

export type KanbanAreaProps = {
    List: List[];
    State: state;
    onDeleteList: (id: number) => void;
    onAddList: (name: string) => void;
    onListClick: () => void;
    onChangeCard: (id: number, group: number) => void;
    onEditList: (id: number, name: string) => void;
};

export type KanbanBoxProps = {
    List: List;
    State: state;
    onDeleteList: (id: number) => void;
    onChangeCard: (id: number, group: number) => void;
};

export type AddListProps = {
    onListClick: () => void;
};

export type PlusListProps = {
    onListClick: () => void;
    onAddList: (name: string) => void;
};

export type KanbanBoxAddProps = {
    setCardClick: React.Dispatch<React.SetStateAction<boolean>>;
};

export type KanbanCardAddProps = {
    List: List;
    setCardClick: React.Dispatch<React.SetStateAction<boolean>>;
    onAddCard: (text: string, group: number) => void;
};

export type KanbanCardProps = {
    Kanban: Kanban;
    onDeleteCard: (id: number) => void;
    onChangeId: (id: number) => void;
    onEditCard: (id: number, text: string) => void;
};

export type KanbanCardContainerProps = {
    List: List;
}

export const ItemTypes = {
    KanbanCard: 'KanbanCard'
};