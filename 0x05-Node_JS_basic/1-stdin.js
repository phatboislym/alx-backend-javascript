// program that reads in user input in interactive and non interactive modes

const isInteractiveMode = process.stdin.isTTY;

console.log('Welcome to Holberton School, what is your name?');

process.stdin.on('data', (data) => {
  const name = data.toString().trim();
  console.log(`Your name is: ${name}`);
  if (isInteractiveMode) {
    process.exit();
  } else {
    console.log('This important software is now closing');
  }
});
