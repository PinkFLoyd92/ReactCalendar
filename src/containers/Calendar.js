import { connect } from 'react-redux';
import Calendar from '../components/Calendar';

import { setMonth } from '../redux/modules/month';
import { setYear } from '../redux/modules/year';
import { addReminder } from '../redux/modules/reminders';

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
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Calendar);
