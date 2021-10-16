/* eslint-disable prefer-destructuring */
import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import store from '../redux/configureStore';

const APP = (
  <Provider store={store}>
    <App />
  </Provider>
);

let navLink = null;
let result = null;

describe('App Component test', () => {
  it('Should render', () => {
    const app = renderer.create(APP).toJSON();
    expect(app).toMatchSnapshot();
  });

  describe('Should the page appear when the corresponding button is clicked', () => {
    it('When the navLink Missions is clicked', () => {
      render(APP);
      navLink = screen.getByText(/Missions/i);
      userEvent.click(navLink);
      result = screen.getAllByText(/Mission/i)[1];
      expect(result.textContent).toBe('Mission');
    });
    it('When the navLink My Profile is clicked', () => {
      render(APP);
      navLink = screen.getByText(/My Profile/i);
      userEvent.click(navLink);
      result = screen.getAllByText(/My Rockets/i)[0];
      expect(result.textContent).toBe('My Rockets');
      result = screen.getAllByText(/My Missions/i)[0];
      expect(result.textContent).toBe('My Missions');
    });
  });
});
