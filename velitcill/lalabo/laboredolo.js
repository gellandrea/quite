const matrix = [
  [0, 0, null, null],
  [null, 2, 2, null],
  [1, null, null, 1],
  [3, 3, null, null]
];

function fillMatrix(matrix) {
  const filledMatrix = matrix.map(row => 
    row.map(item => item !== null ? item : 0)
  );
  return filledMatrix;
}

const optimizedMatrix = fillMatrix(matrix);
console.log(optimizedMatrix);
