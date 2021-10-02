const express = require('express');

// require('./patrones/singleton/index');
// require('./patrones/simple-factory/index');
require('./patrones/facade/index');

const app =  express();

app.listen( 3000, () => {
  console.log(`Server started on port 3000`);
});