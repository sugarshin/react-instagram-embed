import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import * as React from 'react';
import InstagramEmbed from '../src';

test('should render self and sub-components', () => {
  const tree = shallow(<InstagramEmbed url="https://instagr.am/p/Zw9o4/" />);
  expect(toJson(tree)).toMatchSnapshot();
});
