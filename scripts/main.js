'use strict';

const food = {
  'Meat': {
    'Pork': {},
    'Beef': {},
  },

  'Fruit': {
    'Red': {
      'Cherry': {},
      'Strawberry': {},
    },
    'Yellow': {
      'Banana': {},
      'Pineapple': {},
    },

  },
};

const tree = document.querySelector('#tree');

tree.innerHTML = createTree(food);

function createTree(data) {
  let html = ``;

  if (typeof (data) === `object`) {
    html += `<ul>`;

    for (const key in data) {
      html += `<li>${key}</li>`;
      html += createTree(data[key]);
    }
    html += `</ul>`;
  } else if (typeof data === `string`) {
    html += `<li>${data}</li>`;
  }

  return html;
}
