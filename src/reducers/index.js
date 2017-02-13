import { combineReducers } from 'redux';
import selectedBPM from './SelectBPMReducers';
import routes from './routes';

export default combineReducers({
  selectedBPM,
  routes
});
