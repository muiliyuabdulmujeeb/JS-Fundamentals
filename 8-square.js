const args = process.argv.slice(2);

const argsValue = args[0];
const parsedArgsValue = Number(argsValue);

if (Number.isInteger(parsedArgsValue)) {
  let row = 0;
  while (row < parsedArgsValue) {
    let column = 0;
    let rowOutput = '';
    while (column < parsedArgsValue) {
      rowOutput += 'X';
      column++;
    }
    console.log(rowOutput);
    row++;
  }
} else {
  console.log("Missing size");
}
