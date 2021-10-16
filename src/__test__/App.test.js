import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import App from '../App';
import store from '../redux/configureStore';

const APP = (
  <Provider store={store}>
    <App />
  </Provider>
);

describe('App Component test', () => {
  it('Should render', () => {
    const app = renderer.create(APP).toJSON();
    expect(app).toMatchSnapshot();
  });
});
