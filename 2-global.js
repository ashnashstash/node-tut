console.log(__dirname);

setInterval(() => {
  console.log('timeout');
}, 1000);

setInterval(() => {
  console.log('interval');
}, 3000);