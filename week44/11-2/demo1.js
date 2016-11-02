// console.log('hh');
require('shelljs/global');
if (!which('git')) {
  echo('Sorry, this script requires git');
  exit(1);
}
 
// Copy files to release dir 
rm('-rf', 'out/Release');
cp('-R', 'stuff/', 'out/Release');
 
// Replace macros in each .js file 
cd('lib');
ls('*.js').forEach(function(file) {
  sed('-i', 'v0.1.2', 'v0.1.2', file);

  sed('-i', /.*REPLACE_LINE_WITH_MACRO.*\n/, cat('macro.js'), file);
});
cd('..');
exec('git add .');
 
// Run external tool synchronously 
 if (exec('git commit -am "Auto-commit"').code !== 0) {
 echo('Error: Git commit failed');
 exit(1);
}
exec('git push');
