import React from 'react';
import renderer from 'react-test-renderer';
import { HashRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import Header from '../components/Header';

describe('Header Component test', () => {
  it('Should render', () => {
    const app = renderer.create(
      <Provider store={store}>
        <Router>
          <Header />
        </Router>
      </Provider>,
    ).toJSON();
    expect(app).toMatchSnapshot();
  });
});
