import { connect } from 'react-redux';
import Calendar from '../components/Calendar';

import { setMonth } from '../redux/modules/month';

function mapStateToProps(state) {
  return {
    month: state.month,
    reminders: state.reminders,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setMonth: value => dispatch(setMonth(value))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Calendar);
