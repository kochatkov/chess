'use strict';

const section = document.querySelector('.chess');

document.addEventListener('DOMContentLoaded', () => {
  const div = document.createElement('div');

  section.append(div);
  div.className = 'chess__field';

  const colors = ['chess__white', 'chess__black'];

  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      const cells = document.createElement('div');

      if (i % 2 === j % 2) {
        cells.className = colors[0];
      } else {
        cells.className = colors[1];
      }
      div.append(cells);
    }
  }
});
