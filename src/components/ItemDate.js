import React from 'react';
import { PropTypes } from 'prop-types';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import useEditReminder from './useEditReminder';

const useStyles = makeStyles({
  smallLabels: {
    fontSize: '0.7em'
  },
  card: {
    minWidth: 100,
    maxWidth: 200,
    overflowX: 'auto',
  },
  cardEmpty: {
    minWidth: 10,
    filter: 'blur(0.7px)',
    overflowX: 'auto',
  },
  title: {
    fontSize: 12,
  },
  pos: {
    marginBottom: 20,
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
    month,
    removeReminders,
    removeReminder,
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
    setOpenEditMode(keyDate, reminder);
  };


  const remindersJSX = reminders.map((itemReminder) => {
    const {
      start, end, date, note, city, color,
    } = itemReminder;

    return (
      <Chip
        styles={{
          backgroundColor: color
        }}
        label={`${start} - ${end} / ${city} `}
        variant="outlined"
        onDelete={() => {
          removeReminder(keyDate, itemReminder);
        }}
        onClick={() => {
          editReminder(itemReminder);
        }}
      />
    );
  });

  const openDialog = () => {
    setOpenDate(keyDate, true);
  };

  if (month !== date.getUTCMonth()) {
    return (
      <Card className={classes.cardEmpty}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            {date.getUTCDate()}
          </Typography>
          {remindersJSX}
        </CardContent>
        <CardActions>
          <IconButton
            onClick={openDialog}
            aria-label="add"
            className={classes.margin}
          >
            <AddIcon />
          </IconButton>
          <Tooltip title="Remove all the reminders from current date">
            <IconButton
              onClick={() => {
                removeReminders(keyDate);
              }}
              aria-label="delete"
              className={classes.margin}
            >
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        </CardActions>
      </Card>
    );
  }

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {date.getUTCDate()}
        </Typography>
        {remindersJSX}
      </CardContent>
      <CardActions>
        <IconButton
          onClick={openDialog}
          aria-label="add"
          className={classes.margin}
        >
          <AddIcon />
        </IconButton>
        <Tooltip title="Remove all the reminders from current date">
          <IconButton
            onClick={() => {
              removeReminders(keyDate);
            }}
            aria-label="delete"
            className={classes.margin}
          >
            <DeleteIcon />
          </IconButton>
        </Tooltip>
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
  removeReminders: PropTypes.func,
  removeReminder: PropTypes.func,
};

ItemDate.defaultProps = {
  removeReminder: () => {},
  removeReminders: () => {},
  name: null,
  type: 'header',
  reminders: [],
  date: null,
  keyDate: null,
  month: null
};

export default React.memo(ItemDate);
