const redux = require("redux");
const createStore = redux.createStore;

const intialState = {
    counter: 0
};

// Reducer
const rootReducer = (state = intialState, action) => {
    if (action.type === "INC_COUNTER") {
        return {
            ...state,
            counter: state.counter + 1,
        }
    };

    if (action.type === "ADD_COUNTER") {
        return {
            ...state,
            counter: state.counter + action.value,
        }
    };

    return state;
};


// Store 
const Store = createStore(rootReducer);
console.log(Store.getState());

// Dispatch action
Store.dispatch({ type: "INC_COUNTER" });
Store.dispatch({ type: "ADD_COUNTER", value: 5 });
console.log(Store.getState());

// subscriptions