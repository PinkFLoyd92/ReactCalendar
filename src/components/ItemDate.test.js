import React from 'react';
import { shallow } from '../enzyme';

import ItemDate from './ItemDate';

it('renders Child component', () => {
  const wrapper = shallow(
    <ItemDate
      type="header"
      name="LUNES"
    />
  );

  expect(wrapper.contains(<div>LUNES</div>)).toBeTruthy();
});
