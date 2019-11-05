const moment = require('moment');

const SET_YEAR = 'SET_YEAR';

const initialState = moment().year();

export const setYear = year => (dispatch) => {
  dispatch({
    type: SET_YEAR,
    payload: year
  });
};


export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_YEAR: {
      return action.payload;
    }

    default:
      return state;
  }
}
