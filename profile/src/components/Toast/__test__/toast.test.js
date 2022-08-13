import React from "react";
import { getByAltText, render } from '@testing-library/react';
import Toast  from '../index';


test('toast work flow', () => {
 
   const {getByText, getByAltText} = render(<Toast/>);
   console.log(getByText);
   const textElement = getByText('hello');
   expect(textElement).toBeTruthy();
  });