if (process.argv.length < 3) {
  process.exit();
}

for (let time of process.argv.slice(2)) {
  intTime = parseInt(time);
  if (!intTime || intTime < 0) continue;
  setTimeout(() => process.stdout.write('\x07'), intTime * 1000);
};
