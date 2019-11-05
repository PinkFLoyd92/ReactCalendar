import React from 'react';
import { PropTypes } from 'prop-types';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import useEditReminder from './useEditReminder';


const useStyles = makeStyles({
  card: {
    minWidth: 10,
    maxWidth: 100,
  },
  cardEmpty: {
    minWidth: 10,
    filter: 'blur(1px)'
  },
  title: {
    fontSize: 12,
  },
  pos: {
    marginBottom: 12,
  },
});

const ItemDate = (props) => {
  const classes = useStyles();
  const {
    type,
    name,
    reminders,
    date,
    keyDate,
    month
  } = props;

  const {
    isOpen,
    setOpenDate,
    setOpenEditMode,
    reset,
  } = useEditReminder();

  if (type === 'header') {
    return (
      <div>
        {name}
      </div>
    );
  }

  reminders.sort((reminderA, reminderB) => {
    const {
      start: startA,
      end: endA
    } = reminderA;

    const {
      start: startB,
      end: endB
    } = reminderB;

    const [hourA, minuteA] = startA.split(':');
    const [hourB, minuteB] = startB.split(':');

    return (Number.parseInt(hourA) > Number.parseInt(hourB)
           && Number.parseInt(minuteA) > Number.parseInt(minuteB));
  });

  const editReminder = (reminder) => {
    setOpenEditMode(reminder);
  };


  const remindersJSX = reminders.map((itemReminder) => {
    const {
      start, end, date, note, city
    } = itemReminder;
    return (
      <Chip
        label={`${city} - ${start} : ${end}`}
        variant="outlined"
        onClick={() => {
          editReminder(itemReminder);
        }}
      />
    );
  });

  if (month !== date.getUTCMonth()) {
    return (
      <Card className={classes.cardEmpty}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            {date.getUTCDate()}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" />
        </CardActions>
      </Card>
    );
  }

  const openDialog = () => {
    setOpenDate(keyDate, true);
  };

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {date.getUTCDate()}
        </Typography>
        {remindersJSX}
      </CardContent>
      <CardActions>
        <Button size="small" onClick={openDialog}>+</Button>
      </CardActions>
    </Card>
  );
};

ItemDate.propTypes = {
  date: PropTypes.instanceOf(Date),
  name: PropTypes.string,
  keyDate: PropTypes.string,
  type: PropTypes.oneOf(['date', 'header']),
  reminders: PropTypes.arrayOf(PropTypes.shape({})),
  month: PropTypes.number,
};

ItemDate.defaultProps = {
  name: null,
  type: 'header',
  reminders: [],
  date: null,
  keyDate: null,
  month: null
};

export default React.memo(ItemDate);
