'use strict';

const WHITE_CELL_COLOR = 'chess__white';
const BLACK_CELL_COLOR = 'chess__black';
const CHESS_FIELD = 'chess__field';

document.addEventListener('DOMContentLoaded', () => {
  const section = document.querySelector('.chess');
  const div = document.createElement('div');
  let cells;

  section.append(div);

  div.className = CHESS_FIELD;

  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      cells = document.createElement('div');
      changeCellColor(cells, i, j);
      div.append(cells);
    }
  }
});

function changeCellColor(cells, i, j) {
  if (i % 2 === j % 2) {
    cells.className = WHITE_CELL_COLOR;
  } else {
    cells.className = BLACK_CELL_COLOR;
  }
}
