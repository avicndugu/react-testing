export function numberOfPages(items){
  let itemsperpage = 10;
  if (items%itemsperpage === 0) {
    return Math.floor(items/10);
  } else {
    return Math.floor(items/10 + 1);
  }
}