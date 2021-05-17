import {
    ACTIVE_NAVBAR,
    INACTIVE_NAVBAR
} from '../../actions/navbar_actions';

export default (state = false, action) => {
    switch (action.type) {
        case ACTIVE_NAVBAR:
            return true;
        case INACTIVE_NAVBAR:
            return false;
        default:
            return state;
    }
}