const args = process.argv.slice(2);


const firstArg = args[0];
const parsedInt = Number(firstArg);

if (firstArg !== undefined && Number.isInteger(parsedInt) && parsedInt.toString() === firstArg) {
  console.log("My number: " + parsedInt);
} else {
  console.log("Not a number");
}
