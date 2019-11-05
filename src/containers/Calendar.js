import { connect } from 'react-redux';
import Calendar from '../components/Calendar';

import { setMonth } from '../redux/modules/month';
import { setYear } from '../redux/modules/year';
import {
  addReminder,
  editReminder,
  removeReminder,
  removeReminders,
} from '../redux/modules/reminders';

function mapStateToProps(state) {
  return {
    month: state.month,
    year: state.year,
    reminders: state.reminders,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setMonth: value => dispatch(setMonth(value)),
    setYear: value => dispatch(setYear(value)),
    addReminder: (dateObj, value) => dispatch(addReminder(dateObj, value)),
    editReminder: (dateObj, value) => dispatch(editReminder(dateObj, value)),
    removeReminder: (dateObj, value) => dispatch(removeReminder(dateObj, value)),
    removeReminders: dateObj => dispatch(removeReminders(dateObj)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Calendar);
