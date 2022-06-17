import { numberOfPages } from "./numberofpages";
describe('numberofpages', ()=>{
  test('Number of pages for 100 items =10', ()=>{
    expect(numberOfPages(100)).toBe(10);
  })
  test('Number of pages for 91 items =10', ()=>{
    expect(numberOfPages(91)).toBe(10);
  })
  test('Number of pages for 1 item =1', ()=>{
    expect(numberOfPages(1)).toBe(1);
  })
})