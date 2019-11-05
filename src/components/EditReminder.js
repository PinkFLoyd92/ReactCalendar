import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Input from '@material-ui/core/Input';
import swal from 'sweetalert';
import { TwitterPicker } from 'react-color';

import TextField from '@material-ui/core/TextField';
import 'rc-time-picker/assets/index.css';
import useEditReminder from './useEditReminder';

const uuidv4 = require('uuid/v4');

const useStyles = makeStyles(theme => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    margin: 'auto',
    width: 'fit-content',
  },
  formControl: {
    marginTop: theme.spacing(2),
    minWidth: 120,
  },
  formControlLabel: {
    marginTop: theme.spacing(1),
  },
  input: {
    margin: theme.spacing(1),
  },
}));

const EditReminder = (props) => {
  const classes = useStyles();
  const {
    isOpen,
    date,
    reset,
    city,
    start,
    end,
    note,
    reminderState,
    setStart,
    setEnd,
    setCity,
    setNote,
    setOpen,
    editMode,
    color,
    setColor,
  } = useEditReminder();
  const {
    addReminder,
    editReminder
  } = props;

  const [fullWidth, ] = React.useState(true);
  const [maxWidth, ] = React.useState('lg');

  const handleClose = () => {
    reset();
  };

  const handleChangeCity = (e) => {
    setCity(e.target.value);
  };

  const handleColorChange = ({ hex }) => {
    setColor(hex);
  };

  const handleSubmit = async () => {
    if (note
       && start
       && end
        && city
        && !editMode
    ) {
      await addReminder(date, {
        note: reminderState.note,
        start: reminderState.start,
        end: reminderState.end,
        city: reminderState.city,
        color: reminderState.color,
        uuid: uuidv4(),
      });

      setOpen(false);
    } else if (editMode
              && note
       && start
       && end
        && city
    ) {
      await editReminder(date, {
        note: reminderState.note,
        start: reminderState.start,
        end: reminderState.end,
        city: reminderState.city,
        uuid: reminderState.uuid,
        color: reminderState.color,
      });
      setOpen(false);
    } else {
      swal('Error', 'Faltan items por seleccionar', 'error');
    }
  };

  const handleChange = (e) => {
    setNote(e.target.value);
  };

  const onUpdateTimeStart = (evt) => {
    setStart(evt.target.value);
  };

  const onUpdateTimeEnd = (evt) => {
    setEnd(evt.target.value);
  };


  return (
    <React.Fragment>
      <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="max-width-dialog-title"
      >
        <DialogTitle id="max-width-dialog-title">
Date:
          { date }
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <div>
              <Input
                onChange={handleChange}
                defaultValue={note}
                className={classes.input}
                inputProps={{
                  'aria-label': 'description',
                }}
                fullWidth
                placeholder="Ingrese el mensaje"
              />
            </div>
            <div>
              <Input
                onChange={handleChangeCity}
                defaultValue={city}
                className={classes.input}
                inputProps={{
                  'aria-label': 'description',
                }}
                fullWidth
                placeholder="Ingrese la ciudad"
              />
            </div>
            <TextField
              id="time"
              label="Start"
              type="time"
              defaultValue={start}
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
              inputProps={{
                step: 300, // 5 min
              }}
              onChange={onUpdateTimeStart}
            />
            <TextField
              id="time"
              label="End"
              type="time"
              defaultValue={end}
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
              inputProps={{
                step: 300, // 5 min
              }}
              onChange={onUpdateTimeEnd}
            />
            <div>
              <TwitterPicker
                color={color}
                onChangeComplete={handleColorChange}
              />
            </div>
          </DialogContentText>
          <form className={classes.form} noValidate />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSubmit} color="primary">
            Submit
          </Button>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default React.memo(EditReminder);
