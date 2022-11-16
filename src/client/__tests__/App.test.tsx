import React, {useState, useEffect} from 'react';
import { render, fireEvent, RenderResult, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import App from '../App';
import { Arboretum } from '../components/Arboretum'
import { Login } from '../components/Login'
import { PlantDisplay } from '../components/PlantDisplay'
import { ShelfStatus} from '../components/ShelfStatus'
import {LoginProps} from '../../types/front-end'

describe('Unit testing React components', () => {
  // let AppDisplay : JSX.IntrinsicAttributes | RenderResult<typeof import("@testing-library/dom/types/queries"), HTMLElement, HTMLElement>;
  // beforeEach(() => {
  //   AppDisplay = render(<App/>)
  // })
  describe('App', () => {
    // test('renders App', () => {
    //   const { getByText } = render(
    //     <Provider store={store}>
    //       <App />
    //     </Provider>
    //   );
    //   expect(getByText(/app/i)).toBeInTheDocument();
    // });
    test ('App will render Login when login toggle is false', () => {
      const { getByText } = render(<App/>);
      expect(getByText("Welcome to Nourish")).toBeInTheDocument();
    })
    test ('Login functionality will redirect user to arboretum page', ()=> {

    });
    test ('Renders login page when there is no JWT', ()=> {

    });
  });

  describe('Arboretum Display', ()=> {
    test('Renders plant displays', ()=> {
      const { getByText } = render(<Arboretum/>);
      expect(getByText("Time Stamp")).toBeInTheDocument();
    });
    test('Renders current Date/Time', ()=> {
      const { getByText } = render(<App/>);
      const date = new Date();
      
    });
    test('Renders plant shelf status text', ()=> {

    });
    test('Renders plant shelf status from state', ()=> {

    });
  });
  describe('Login', () => {
    test('OnClick functionality on page', async () => {
      const LoginProps = (username : string) => {
        return
      }
      const { getByText } = render(<Login loginHandler={LoginProps}/>)
      fireEvent.click(screen.getByLabelText("loginButton"));
      expect(getByText("Time Stamp")).toBeInDocument();
    });
    test('Displays welcome message', () => {
      const LoginProps = (username : string) => {
        return
      }
      const { getByText } = render(<Login loginHandler={LoginProps}/>);
      expect(getByText("Welcome to Nourish")).toBeInTheDocument();
    });
  });
  describe('Plant Display', () => {
    test('test if individual plant name/holder is displayed', () => {

    });
    test('test if clicking on individual plant placeholder will open up a modal', ()=> {

    });
  });
  describe('Modals', ()=> {
    test('test if modal will display plant-specific information', () => {

    });
    test('test if modal task toggle will change task completion state', () => {

    });
    test('test if modal display status specific message', () => {

    });
  });
  describe('Shelf Status', () => {
    test('test if shelf status is displaying aggregate average of plant health status', () => {

    });
  });
});


