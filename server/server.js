const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const cors = require('cors');

// create a DB connection  
mongoose.connect('mongodb+srv://akhileshpatil69:Akhi%402001@cluster0.gbwju.mongodb.net/')
    .then(() => console.log('MongoDB connection successful'))
    .catch((err) => console.log(err))

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
    cors({
        origin: 'http://localhost:5173/',
        // origin: 'https://5173-akhileshp19-mernecommer-c31ysimorwg.ws-us116.gitpod.io/',
        methods: ['GET', 'POST', 'DELETE', 'PUT'],
        allowedHeaders: [
            'Content-Type',
            'Authorization',
            'Cache-Control',
            'Expires',
            'Pragma'
        ],
        credentials: true
    })
)

app.use(cookieParser);
app.use(express.json());

app.listen(PORT, () => console.log(`listening to requests on PORT ${PORT}`))