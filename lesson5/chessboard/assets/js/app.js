// Homework#5 GB_JS1: Chessboard 


const letters = 'ABCDEFGH'.split('');
let chessBoard = document.querySelector('.chessboard');
let table = document.querySelector('table');


for (let i = 0; i < 8; i++) {
  let row = document.createElement('tr');
  for (let j = 0; j < 8; j++) {
    let cell = document.createElement('td');
    row.appendChild(cell);

    if (i === 0 || i === 7) { cell.insertBefore(document.createTextNode(letters[j]), cell.childNodes[j]) }
    if (j === 0 || j === 7) { cell.innerHTML = i+1 }

    cell.className = (i % 2 == 1 && j % 2 == 1) || (i % 2 === 0 && j % 2 === 0) ? 'cell cell_white' : 'cell cell_black';
  }
  table.appendChild(row)
}
chessBoard.appendChild(table);