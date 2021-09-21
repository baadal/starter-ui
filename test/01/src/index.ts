import dapi, { foo, num } from 'starter-lib';

console.log('>>', dapi);
console.log('>>', foo);
console.log('>>', num);


// ----------
// 1. require() of ES Module is not supported [e.g. from tranpiled commonjs code]
// 2. `require`ing commonjs module from from (untranspiled) JS file will expose `export default` as { default } 
// 3. `import`ing commonjs module from .mjs (ES Module) file will expose `export default` as { default } 
// The above issue (#3) can be resolved by using exports { import, require } field in package.json
// ----------
