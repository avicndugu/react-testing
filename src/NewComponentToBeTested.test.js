import { render, screen } from '@testing-library/react';
import NewComponentToBeTested from './NewComponentToBeTested';

// Test version 1
// test('Students list title', ()=>{
//   render(<NewComponentToBeTested />);
//   const studenttitle = screen.getByText(/Students' Names List/i);
//   expect(studenttitle).toBeInTheDocument();
// })


// Test version 2
test('Students list title', ()=>{
  render(<NewComponentToBeTested />);
  expect(screen.getByText(/Students' Names List/i)).toBeInTheDocument();
})

test('Student name', ()=>{
  render(<NewComponentToBeTested />);
  expect(screen.getByText(/Kelvin/i)).toBeInTheDocument();
})


// Test that tests the result of non existing student
test('Student name does not exist', ()=>{
  render(<NewComponentToBeTested />);
  expect(() => screen.getByText(/Madison/i)).toThrow()
})