const app = require('../src/app');
require('dotenv').config();

const port = process.env.PORT;

app.listen(port, () => {
    console.log('server running at http://localhost:3000');
})