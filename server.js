// server is setup to take routes, but routes aren't setup yet!
// Once they're good, you can start the server with "npm start"
// Just make sure the MySQL database is setup first ("mysql -u root -p", enter your password, then "source db/schema.sql")

const express = require("express");
const sequelize = require("./config/connection");
const routes = require("./controllers");
const path = require("path");
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});
const app = express();
const PORT = process.env.PORT || 3001;

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);
sequelize.sync({ force: false }).then(() => {
	app.listen(PORT, () => {
		console.log(`App listening on port http://localhost:${PORT}`);
	});
});
