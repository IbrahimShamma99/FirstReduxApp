const intialState = {
    counter: 0,
}


const reducer = (state = intialState, action) => {
    if (action.type === "INCREMENT") {
        return {
            ...state,
            counter: state.counter + 1
        };
    }
    if (action.type === "DECREMENT") {
        return {
            ...state,
            counter: state.counter - 1
        };

    };

    if (action.type === "ADD") {
        return {
            ...state,
            counter: state.counter + action.value
        };

    };

    if (action.type === "SUB") {
        return {
            ...state,
            counter: state.counter - action.value
        };

    };


    return state
};


export default reducer;