const express = require('express');
const cors = require('cors');
const server = express();
server.use(cors());
server.use(express.json());

require('dotenv').config();

const TaskRoutes = require('./routes/TaskRoutes');
server.use('/task', TaskRoutes); 


//server.listen(3333,() =>{});

server.listen(process.env.PORT || 3333, () => {
    console.log('API ONLINE');
});