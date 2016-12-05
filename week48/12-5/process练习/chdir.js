console.log('Starting directory: ' + process.cwd());
try {
process.chdir('/stmp');
console.log('New directory: ' + process.cwd());
}
catch (err) {
console.log('chdir: ' + err);
}
