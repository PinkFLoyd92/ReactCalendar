const moment = require('moment');

const SET_MONTH = 'SET_MONTH';

const initialState = moment().month();

export const setMonth = month => (dispatch) => {
  dispatch({
    type: SET_MONTH,
    payload: month
  });
};


export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_MONTH: {
      return action.payload;
    }

    default:
      return state;
  }
}
