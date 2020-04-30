'use strict';

const WHITE_CELL_COLOR = 'chess__white';
const BLACK_CELL_COLOR = 'chess__black';
const CHESS_FIELD = 'chess__field';

const isWhite = (cell) => (
  WHITE_CELL_COLOR
);

const isBlack = (cell) => (
  BLACK_CELL_COLOR
);

document.addEventListener('DOMContentLoaded', () => {
  const section = document.querySelector('.chess');
  const div = document.createElement('div');
  let cell;

  section.append(div);

  div.className = CHESS_FIELD;

  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      cell = document.createElement('div');

      if (i % 2 === j % 2) {
        cell.className = isWhite();
      } else {
        cell.className = isBlack();
      }
      div.append(cell);
    }
  }
});
