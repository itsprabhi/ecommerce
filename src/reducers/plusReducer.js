const initialState = {
    number:0,
    text: 'text to change'
}

const plusReducer = (state = initialState, actions) => {
    switch (actions.type){
        case 'INCREMENT':
            return {
                ...state,
                number: state.number + 1
            };
        case 'CHANGE_TEXT':
        return {
            ...state,
            text: actions.payload
        };
        default:
            return state;
    }
}

export default plusReducer;