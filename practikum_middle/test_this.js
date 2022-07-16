const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const User = require('./models/user');

const { PORT = 3000, BASE_PATH } = process.env;
const app = express();

mongoose.connect('mongodb://localhost:27017/authdb', {
	useNewUrlParser: true,
	useCreateIndex: true,
	useFindAndModify: false,
	useUnifiedTopology: true,
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/signup', (req, res) => {
	bcrypt.hash(req.body.password, 10)
		.then(hash => User.create({
			email: req.body.email,
			password: req.body.password,
		}))
		.then((user) => {
			res.status(201).send(user);
		})
		.catch((err) => {
			res.status(400).send(err);

		});
});

app.use(express.static(path.join(__dirname, 'public')));
app.listen(PORT, () => {
	console.log('Ссылка на сервер:');
	console.log(BASE_PATH);
});