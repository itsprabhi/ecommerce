const subtractReducer = (numbSub = 0, actions) => {
    switch (actions.type){
        case 'DECREMENT':
            return numbSub - 1;
        default:
            return numbSub;
    }
}

export default subtractReducer;