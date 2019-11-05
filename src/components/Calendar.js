import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { EditReminderProvider, EditReminderContext } from './EditReminderContext';
import EditReminder from './EditReminder';

import { getDaysInMonth, formatDate } from '../helpers/dateHelper';

import ItemDate from './ItemDate';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  paperTitle: {
    height: 100,
    width: 100,
  },
  paper: {
    height: 140,
    width: 100,
  },
}));

const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = [...new Array(12).fill(1)];

const Calendar = (props) => {
  const {
    month,
    year,
    addReminder,
    editReminder,
    removeReminder,
    removeReminders,
    setMonth,
    reminders,
  } = props;

  const changeMonth = (evt) => {
    setMonth(Number.parseInt(evt.target.value));
  };

  const classes = useStyles();

  const monthDates = getDaysInMonth(month, year);

  const weekDays = DAYS.map(dayName => (
    <Col
      xs={1}
      lg={1}
      md={1}
      key={dayName}
    >
      <ItemDate
        type="header"
        name={dayName}
      />
    </Col>
  ));

  const childrenItems = ([...new Array(5)]).map((i, index) => {
    const months = monthDates.slice(index * 7, (index + 1) * 7);
    const monthsJSX = months.map((date) => {
      const keyDate = formatDate(date);
      const remindersFiltered = reminders[keyDate] || [];

      return (
        <Col
          xs={1}
          lg={1}
          md={1}
          key={keyDate}
        >
          <ItemDate
            month={month}
            type="date"
            date={date}
            keyDate={keyDate}
            reminders={remindersFiltered}
            removeReminder={removeReminder}
            removeReminders={removeReminders}
          />
        </Col>
      );
    });

    return (
      <Row key={i}>
        { monthsJSX }
      </Row>
    );
  });

  const monthOptionsJSX = months.map((itemMonth, index) => (
    <option
      key={itemMonth}
      value={index}
      selected={index.toString() === month.toString()}
    >
      {index + 1}
    </option>
  ));

  return (
    <EditReminderProvider>
      <React.Fragment>
        <label htmlFor="month">Select month: </label>
        <select
          id="month"
          onChange={changeMonth}
        >
          {monthOptionsJSX}
        </select>
        <Container fluid>
          <Row>
            {weekDays}
          </Row>
          {childrenItems}
        </Container>
        <EditReminder
          addReminder={addReminder}
          editReminder={editReminder}
        />
      </React.Fragment>
    </EditReminderProvider>
  );
};

Calendar.propTypes = {
  addReminder: PropTypes.func.isRequired,
  editReminder: PropTypes.func.isRequired,
  removeReminder: PropTypes.func.isRequired,
  removeReminders: PropTypes.func.isRequired,
  setMonth: PropTypes.func.isRequired,
  reminders: PropTypes.shape({}).isRequired,
  month: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
};

export default React.memo(Calendar);
