import { render, screen } from '@testing-library/react';
import TestReactTestingLibrary from './TestReactTestingLibrary';

test("Display Google's Link", ()=> {
  render(<TestReactTestingLibrary />);
  const linkgoogle = screen.getByText(/hello google/i);
  expect(linkgoogle).toBeInTheDocument();
})

test("Display search button", ()=> {
  render(<TestReactTestingLibrary />);
  const searchbutton = screen.getByText(/search/i);
  expect(searchbutton).toBeInTheDocument();
})