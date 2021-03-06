const ADD_CARD = 'kanban/ADD_CARD' as const;
const DELETE_CARD = 'kanban/DELETE_CARD' as const;
const EDIT_CARD = 'kanban/EDIT_CARD' as const;
const CHANGE_GROUP = 'kanban/CHANGE_GROUP' as const;

let num: number = 1;

export const add_card = (text: string, group: number) => ({
    type: ADD_CARD,
    payload: {
        text: text,
        group: group
    }
});

export const delete_card = (id: number) => ({
    type: DELETE_CARD,
    payload: id
});

export const edit_card = (id: number, text: string) => ({
    type: EDIT_CARD,
    payload: {
        id: id,
        text: text
    }
});

export const change_group = (id: number, group: number) => ({
    type: CHANGE_GROUP,
    payload: {
        id: id,
        group: group
    }
});
 
type KanbanAction = 
    | ReturnType<typeof add_card>
    | ReturnType<typeof delete_card>
    | ReturnType<typeof edit_card>
    | ReturnType<typeof change_group>;

export type Kanban = {
    id: number;
    text: string;
    group: number;
};

type KanbanState = Kanban[];

const initalKanbanState: KanbanState = [];

const kanban = (state: KanbanState = initalKanbanState, action: KanbanAction) => {
    switch(action.type) {
        case ADD_CARD:
            return state.concat({
                id: num++,
                text: action.payload.text,
                group: action.payload.group
            });
        
        case DELETE_CARD:
            return state.filter(kanban => kanban.id !== action.payload);

        case EDIT_CARD:
            return state.map(state =>
                state.id === action.payload.id ? {...state, text: action.payload.text} : state);

        case CHANGE_GROUP:
            return state.map(state =>
                state.id === action.payload.id ? {...state, group: action.payload.group} : state
            );
        default:
            return state;
    }
}

export default kanban;