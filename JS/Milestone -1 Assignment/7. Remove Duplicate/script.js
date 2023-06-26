let i1 = document.getElementById('i1');
let i2 = document.getElementById('i2');
let i3 = document.getElementById('i3');
let i4 = document.getElementById('i4');
let btn = document.getElementById('btn');
let item_name = document.getElementById('item_name');

let a = [];

function addItem(i1, i2, i3, i4) {
  return a.push(i1, i2, i3, i4);
}

function addItems(i1, i2, i3, i4) {
  a = [i1, i2, i3, i4];
  a = a.filter((item, index) => a.indexOf(item) === index);
}

btn.addEventListener('click', () => {
  addItems(i1.value, i2.value, i3.value, i4.value);
  item_name.innerHTML = a.join(', ');
});
