import { combineReducers } from 'redux';

import astronautsReducer from './astronaut/astronautsReducer';
import astronautByIdReducer from './astronaut/astronautByIdReducer';

import agencysReducer from './agency/agencysReducer';
import agencyByIdReducer from './agency/agencyByIdReducer';

export default combineReducers({
    astronauts: astronautsReducer,
    astronautDetails: astronautByIdReducer,
    agencyDetails: agencyByIdReducer,
    agencies: agencysReducer
});