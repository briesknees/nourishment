import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import App from '../App';
import Arboretum from '../components/Arboretum'
import Login from '../components/Login'
import PlantDisplay from '../components/PlantDisplay'

describe('Unit testing React components', () => {
  describe('App', () => {
    test('renders App', () => {
      const { getByText } = render(
        <Provider store={store}>
          <App />
        </Provider>
      );
      expect(getByText(/app/i)).toBeInTheDocument();
    });
    test ('Login functionality will redirect user to arboretum page', ()=> {

    });
    test ('Renders login page when there is no JWT', ()=> {

    });
  })

  describe('Arboretum Display', ()=> {
    let ArboretumDisplay
    const props = {}
    beforeEach(() => {
      ArboretumDisplay = render(<Arboretum {...props} />)
    })
    test('Renders plant displays', ()=> {

    });
    test('Renders current Date/Time', ()=> {

    });
    test('Renders plant shelf status text', ()=> {

    });
    test('Renders plant shelf status from state', ()=> {

    });
  });
  describe('Login', () => {
    let Login;
    const props = {}
    beforeEach(() => {
      Login = render(<Login {...props} />)
    })
    describe('OnClick functionality on page', () => {

    });
    describe('Displays welcome message', () => {

    });
  });
  describe('Plant Display', () => {
    let PlantDisplay;
    const props = {};
    beforeEach(() => {
      PlantDisplay = render(<PlantDisplay {...props} />)
    })
    describe('test if individual plant name/holder is displayed', () => {

    });
    describe('test if clicking on individual plant placeholder will open up a modal', ()=> {

    });
  });
  describe('Modals', ()=> {
    describe('test if modal will display plant-specific information', () => {

    });
    describe('test if modal task toggle will change task completion state', () => {

    });
    describe('test if modal display status specific message', () => {

    });
  });
  describe('Shelf Status', () => {
    let ShelfStatus;
    const props = {};
    beforeEach(() => {
      ShelfStatus = render(<ShelfStatus {...props} />)
    })
    describe('test if shelf status is displaying aggregate average of plant health status', () => {

    });
  });
});


