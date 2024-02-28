// Count the number of items
const items = document.body.getElementsByClassName('item');
const nItems = items.length;

// If num items gt 1 make multicolour
if (nItems > 1) {
  for (let i = 0; i < nItems; i++) {
    let item = items[i];
    let hue = Math.round(i / (nItems - 1) * 265);
    item.style.backgroundColor = `hsl(${hue}, 100%, 80%)`;
  }
}
