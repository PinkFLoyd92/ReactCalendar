import React from 'react';
import { shallow } from '../enzyme';

import EditReminder from './EditReminder';

it('renders Child component', () => {
  const wrapper = shallow(
    <EditReminder />
  );

  expect(wrapper.find('#time')).toBeDefined();
});
