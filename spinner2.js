const period = "|/-\\|";
let timePrinted = 100;

for (const i of period) {
  setTimeout(() => {
    process.stdout.write(`\r${i}   `);
  }, timePrinted) 
  timePrinted += 200;
};