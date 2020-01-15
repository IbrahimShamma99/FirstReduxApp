const redux = require("redux");
const createStore = redux.createStore;

const intialState = {
    counter: 0
};

//SECTION Reducer
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


//SECTION Store 
const Store = createStore(rootReducer);

//SECTION subscriptions

Store.subscribe(() => {
    console.log("[Subscription]", Store.getState());
});

//SECTION Dispatch action
Store.dispatch({ type: "INC_COUNTER" });
Store.dispatch({ type: "ADD_COUNTER", value: 5 });