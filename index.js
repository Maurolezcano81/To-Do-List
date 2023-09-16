const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');

app.use(cors());
dotenv.config();

app.listen(process.env.PORTSERVER || 3000, () => {
    console.log('listening on port ' + process.env.PORTSERVER);
});



