import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import Mission from '../components/Missions';

describe('Mission Component test', () => {
  it('Should render', () => {
    const app = renderer.create(
      <Provider store={store}>
        <Mission />
      </Provider>,
    ).toJSON();
    expect(app).toMatchSnapshot();
  });
});
