const ADD_LIST = 'list/ADD_LIST' as const;
const DELETE_LIST = 'list/DELETE_LIST' as const;

let num: number = 4;

export const add_list = (name: string) => ({
    type: ADD_LIST,
    payload: name
});

export const delete_list = (id: number) => ({
    type: DELETE_LIST,
    payload: id
});

type ListAction = 
    | ReturnType<typeof add_list>
    | ReturnType<typeof delete_list>;

export type List = {
    id: number;
    name: string;
};

type ListState = List[];

const initalKanbanState: ListState = [
    {
        id: 1,
        name: 'Todo'
    },
    {
        id: 2,
        name: 'Doing'
    },
    {
        id: 3,
        name: 'Done'
    }
];

const List = (state: ListState = initalKanbanState, action: ListAction) => {
    switch(action.type) {
        case ADD_LIST:
            return state.concat({
                id: num++,
                name: action.payload
            });

        case DELETE_LIST:
            return state.filter(list => list.id !== action.payload);
        
    
        default:
            return state;
    }   
};

export default List;