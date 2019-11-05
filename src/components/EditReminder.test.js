import React from 'react';
import { shallow } from '../enzyme';

import EditReminder from './EditReminder';

it('renders Child component', () => {
  const wrapper = shallow(
    <EditReminder />
  );

  expect(wrapper.find('#time')).toBeDefined();
});

it('test max length of 30 characters', () => {
  const wrapper = shallow(
    <EditReminder />
  );

  wrapper.find('#note').simulate('change', { target: { value: 'THIIIIIIIIS IIIIIIIIIIIIS A VEEEEEEEERY LOOOOOOOOONG TEEEEEEEEEEEEEEEEEEXT' } });

  expect(wrapper.find('.Mui-error')).toBeDefined();
});
