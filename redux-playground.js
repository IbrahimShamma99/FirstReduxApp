const redux = require("redux");
const createStore = redux.createStore;

const intialState = {
    counter: 0
};

// Reducer
const rootReducer = (state = intialState, action) => {
    return state;
};


// Store 
const Store = createStore(rootReducer);
console.log(Store.getState());

// Dispatch action


// subscription