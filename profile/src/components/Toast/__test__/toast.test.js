import React from "react";
import { cleanup , fireEvent , render } from '@testing-library/react';
import checkIcon from '../../../assets/check.svg';
import errorIcon from '../../../assets/error.svg';
import Toast  from '../index';

afterEach(cleanup);
const testList = [
   {
     id: 1,
     title: 'Success',
     description: 'This is a success toast component',
     backgroundColor: '#5cb85c',
     icon: checkIcon
   },
   {
     id: 2,
     title: 'Danger',
     description: 'This is an error toast component',
     backgroundColor: '#d9534f',
     icon: errorIcon
   },
];
test('toast Danger', () => {
   const {getByText, getByAltText} = render(<Toast toastList={testList} position="bottom-right"/>);
   console.log(getByText);
   const toastText = getByText('Danger');
   expect(toastText).toBeInTheDocument();
  });
  test('toast Success', () => {
   const {getByText, getByAltText} = render(<Toast toastList={testList} position="bottom-right"/>);
   console.log(getByText);
   const toastText = getByText('Success');
   expect(toastText).toBeInTheDocument();
  });