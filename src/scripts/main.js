'use strict';

const WHITE_CELL_COLOR = 'chess__white';
const BLACK_CELL_COLOR = 'chess__black';
const CELL_OF_NUMBER = 'chess__number';
const CHESS_FIELD = 'chess__field';
const CHESS_FIELD_OF_NUMBERS_RIGHT = 'chess__column chess__column-right';
const CHESS_FIELD_OF_NUMBERS_LEFT = 'chess__column chess__column-left';
const CHESS_LETTERS_UP = 'chess__letters chess__letters-up';
const CHESS_LETTERS_DOWN = 'chess__letters chess__letters-down';
const CHESS_LETTER = 'chess__letter';
const numbers = [1, 2, 3, 4, 5, 6, 7, 8].reverse();
const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
const changeColor = (i, j) => (
  i % 2 === j % 2 ? WHITE_CELL_COLOR : BLACK_CELL_COLOR
);

document.addEventListener('DOMContentLoaded', () => {
  const section = document.querySelector('.chess');
  let cell;
  let cellOfNumber;
  let cellOfLetter;
  const div = document.createElement('div');
  const firstColumnOfNumbers = document.createElement('div');
  const secondColumnOfNumbers = document.createElement('div');
  const firstRowOfLetters = document.createElement('div');
  const secondRowOfLetters = document.createElement('div');

  section.append(div);
  section.append(firstColumnOfNumbers);
  section.append(secondColumnOfNumbers);
  section.append(firstRowOfLetters);
  section.append(secondRowOfLetters);

  div.className = CHESS_FIELD;
  firstColumnOfNumbers.className = CHESS_FIELD_OF_NUMBERS_RIGHT;
  secondColumnOfNumbers.className = CHESS_FIELD_OF_NUMBERS_LEFT;
  firstRowOfLetters.className = CHESS_LETTERS_UP;
  secondRowOfLetters.className = CHESS_LETTERS_DOWN;

  numbers.map(number => {
    cellOfNumber = document.createElement('p');
    cellOfNumber.textContent = `${number}`;
    cellOfNumber.className = CELL_OF_NUMBER;
    secondColumnOfNumbers.append(cellOfNumber);
  });

  numbers.map(number => {
    cellOfNumber = document.createElement('p');
    cellOfNumber.textContent = `${number}`;
    cellOfNumber.className = CELL_OF_NUMBER;
    firstColumnOfNumbers.append(cellOfNumber);
  });

  letters.map(letter => {
    cellOfLetter = document.createElement('p');
    cellOfLetter.textContent = letter;
    cellOfLetter.className = CHESS_LETTER;
    firstRowOfLetters.append(cellOfLetter);
  });

  letters.map(letter => {
    cellOfLetter = document.createElement('p');
    cellOfLetter.textContent = letter;
    cellOfLetter.className = CHESS_LETTER;
    secondRowOfLetters.append(cellOfLetter);
  });

  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      cell = document.createElement('div');

      cell.className = changeColor(i, j);

      div.append(cell);
    }
  }
});
