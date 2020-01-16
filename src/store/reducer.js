import { add, sub, dec, inc, store, remove } from '../constants/constants';

const intialState = {
    counter: 0,
    results: []
};


const reducer = (state = intialState, action) => {

    switch (action.type) {
        case inc:
            return {
                ...state,
                counter: state.counter + 1
            }
        case dec:
            return {
                ...state,
                counter: state.counter - 1
            };

        case add:
            return {
                ...state,
                counter: state.counter + action.value
            };
        case sub:
            return {
                ...state,
                counter: state.counter - action.value
            };
        case store:
            return {
                ...state,
                results: state.results.push(state.counter)
            }

        case remove:
            return {
                ...state,
                results: state.results.push(state.counter)
            }

        default:
            return {
                ...state
            }

    }
};


export default reducer;