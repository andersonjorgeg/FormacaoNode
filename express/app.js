const express = require('express');
const app = express();

require('./routers.js')(app);

app.listen(3000, () => {
  console.log('A aplicação está escutando na porta 3000');
})