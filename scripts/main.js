'use strict';

const WHITE_CELL_COLOR = 'chess__white';
const BLACK_CELL_COLOR = 'chess__black';
const CHESS_FIELD = 'chess__field';

const changeColor = (i, j) => (
  i % 2 === j % 2 ? WHITE_CELL_COLOR : BLACK_CELL_COLOR
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

      cell.className = changeColor(i, j);

      div.append(cell);
    }
  }
});
