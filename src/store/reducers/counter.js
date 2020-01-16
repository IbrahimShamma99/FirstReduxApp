import { add, sub, dec, inc } from '../../constants/constants';

const intialState = {
    counter: 0
};


const Counterreducer = (state = intialState, action) => {

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
        default:
            return {
                ...state
            }

    }
};


export default Counterreducer;