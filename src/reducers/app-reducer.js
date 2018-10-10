import * as type from '../constants/action-types';

const initialState = { 
    // holds url that has beed selected 
    url: '',
    // holds header title
    title: 'Dashboard'
}

// handles app actions
export default (state = initialState, action) => {
    switch (action.type) {

        case type.SET_TITLE:
            return { ...state, title: action.payload };
            break;

        case type.SET_NAV_URL:
            return { ...state, url: action.payload };
            break;

        default:
            return state;
    }
}