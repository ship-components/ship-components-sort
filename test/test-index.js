// test/test_index.js

// require all modules ending in "_test" from the
// current directory and all subdirectories
var testsContext = require.context('.', true, /\-test\.js$/);
testsContext.keys().forEach(testsContext);


// require all modules ending in "_test" from the
// current directory and all subdirectories
var srcContext = require.context('../src', true, /\.js$/);
srcContext.keys().forEach(srcContext);
