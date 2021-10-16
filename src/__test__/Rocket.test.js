import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import Rocket from '../components/Rockets';

describe('Rocket Component test', () => {
  it('Should render', () => {
    const app = renderer.create(
      <Provider store={store}>
        <Rocket />
      </Provider>,
    ).toJSON();
    expect(app).toMatchSnapshot();
  });
});
