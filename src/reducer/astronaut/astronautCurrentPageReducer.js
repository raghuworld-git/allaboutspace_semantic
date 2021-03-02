import { ASTRONAUT_CURR_PAGE } from '../../actions/types';

const astronautCurrentPageReducer = (state = 0, action) => {
    switch (action.type) {
        case ASTRONAUT_CURR_PAGE:
            return action.payload;
        default:
            return state;
    }
};

export default astronautCurrentPageReducer;