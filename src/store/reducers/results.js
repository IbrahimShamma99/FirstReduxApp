import { store, remove } from '../../constants/constants';

const intialState = {
    results: []
};


const Resultsreducer = (state = intialState, action) => {

    switch (action.type) {
        case store:
            return {
                ...state,
                results: state.results.concat({ id: new Date(), value: action.value })
            }

        case remove:
            const newStateResults = state.results.filter((element) => {
                return element.id !== action.ResultElID;
            });
            return {
                ...state,
                results: newStateResults
            }

        default:
            return {
                ...state
            }
    }
};


export default Resultsreducer;