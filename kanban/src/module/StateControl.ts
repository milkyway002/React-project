const SET_LIST_STATE = 'state/SET_LIST_STATE' as const;
const SET_CARD_ID = 'state/SET_CARD_ID' as const;

export const set_list_state = () => ({
    type: SET_LIST_STATE
});

export const set_card_id = (id: number) => ({
    type: SET_CARD_ID,
    payload: id
});

type actionType = 
    | ReturnType<typeof set_list_state>
    | ReturnType<typeof set_card_id>;

export type state = {
    listState: boolean,
    id: number
};

type stateState = state;

const initalState: stateState = {
    listState: false,
    id: 1
};

const StateControl = (state: stateState = initalState, action: actionType) => {
    switch(action.type) {
        case SET_LIST_STATE:
            return {
                ...state,
                listState: !state.listState
            };

        case SET_CARD_ID:
            return {
                ...state,
                id: action.payload
            };

        default: 
            return state;
    };
};

export default StateControl;