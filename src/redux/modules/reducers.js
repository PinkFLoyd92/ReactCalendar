import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import month from './month';
import reminders from './reminders';

export default history => combineReducers({
  router: connectRouter(history),
  reminders,
  month,
});
