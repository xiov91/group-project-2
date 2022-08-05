<<<<<<< HEAD
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));
=======
// server is setup to take routes, but routes aren't setup yet!
// Once they're good, you can start the server with "npm start"
// Just make sure the MySQL database is setup first ("mysql -u root -p", enter your password, then "source db/schema.sql")

const express = require("express");
const sequelize = require("./config/connection");
const routes = require("./routes");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);
sequelize.sync({ force: false }).then(() => {
	app.listen(PORT, () => {
		console.log(`App listening on port http://localhost:${PORT}`);
	});
});
>>>>>>> 5418e3054c9636c47b6edef92aac44f301360b56
