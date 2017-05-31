import {FETCH_WEATHER} from '../actions/index';

export default function (state = [], action) {
    // console.log('Action received', action);
    switch (action.type) {
        case FETCH_WEATHER:
            // don't use state.push(action.payload.data)!!!
            // Changing the state directly in ReDux is not a good idea
            // as it was the case for React!
            // return state.concat([action.payload.data]);
            return [action.payload.data, ...state];
    }

    return state;
}