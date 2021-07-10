import * as React from 'react';
import renderer from 'react-test-renderer';
import InstagramEmbed from '../src';

test('should render self and sub-components', () => {
  const tree = renderer
    .create(<InstagramEmbed url="https://instagr.am/p/Zw9o4/" clientAccessToken="abc|123" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
