import React from 'react';
import { shallow } from '../enzyme';

import Calendar from './Calendar'
import ItemDate from './ItemDate'

it('renders Child component', () => {
  const wrapper = shallow(
    <Calendar
      year={2019}
      month={10}
      reminders={{}}
      />);

  expect(wrapper.find(ItemDate)).toHaveLength(42);
});
