const express = require('express');
const bodyParser = require('body-parser');
import TaskRouter from 'routes/index';
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb://localhost:27017/users');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

app