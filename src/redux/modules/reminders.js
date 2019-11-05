const ADD_REMINDER = 'ADD_REMINDER';
const REMOVE_REMINDER = 'REMOVE_REMINDER';
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

    default:
      return state;
  }
}
