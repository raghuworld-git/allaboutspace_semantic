import { combineReducers } from 'redux';

import astronautsReducer from './astronaut/astronautsReducer';
import astronautByIdReducer from './astronaut/astronautByIdReducer';
import astronautCurrentPageReducer from './astronaut/astronautCurrentPageReducer';

import agencysReducer from './agency/agencysReducer';
import agencyByIdReducer from './agency/agencyByIdReducer';

export default combineReducers({
    astronauts: astronautsReducer,
    astronautDetails: astronautByIdReducer,
    astronautCurrentPage : astronautCurrentPageReducer,
    agencyDetails: agencyByIdReducer,
    agencies: agencysReducer
});