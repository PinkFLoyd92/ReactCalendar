const ADD_REMINDER = 'ADD_REMINDER';
const REMOVE_REMINDER = 'REMOVE_REMINDER';
const REMOVE_REMINDERS = 'REMOVE_REMINDERS';
const UPDATE_REMINDER = 'UPDATE_REMINDER';

const initialState = {};

export const addReminder = (dateString, reminderObj) => (dispatch) => {
  dispatch({
    type: ADD_REMINDER,
    payload: {
      date: dateString, reminder: reminderObj
    }
  });
};

export const editReminder = (dateObj, reminderObj) => (dispatch) => {
  dispatch({
    type: UPDATE_REMINDER,
    payload: {
      date: dateObj, reminder: reminderObj
    }
  });
};

export const removeReminders = (dateObj) => (dispatch) => {
  dispatch({
    type: REMOVE_REMINDERS,
    payload: {
      date: dateObj
    }
  });
};

export const removeReminder = (dateObj, reminderObj) => (dispatch) => {
  dispatch({
    type: REMOVE_REMINDER,
    payload: {
      date: dateObj, reminder: reminderObj
    }
  });
};

/*
{
  'date': [reminders]...
}
*/

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_REMINDER: {
      const newState = { ...state };

      if (!newState[action.payload.date]) {
        newState[action.payload.date] = [];
      }
      newState[action.payload.date].push({ ...action.payload.reminder });
      return newState;
    }

    case UPDATE_REMINDER: {
      const newState = { ...state };
      const dates = [...newState[action.payload.date]];

      const index = dates.findIndex(item => action.payload.reminder.uuid === item.uuid);

      dates[index] = { ...action.payload.reminder };
      newState[action.payload.date] = dates;
      return newState;
    }

    case REMOVE_REMINDER: {
      const newState = { ...state };
      const dates = [...newState[action.payload.date]];

      const index = dates.findIndex(item => action.payload.reminder.uuid === item.uuid);

      dates.splice(index, 1);
      newState[action.payload.date] = dates;
      return newState;
    }

    case REMOVE_REMINDERS: {
      const newState = { ...state };
      newState[action.payload.date] = [];
      return newState;
    }

    default:
      return state;
  }
}
