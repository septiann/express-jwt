const express = require('express');
const cors = require('cors');
const quote = require('inspirational-quotes');

const app = express();

var corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({
    extended: true
}));

const db = require("./app/models");
const Role = db.role;

// Development
/* db.sequelize.sync({
    force: true
}).then(() => {
    console.log('Drop and Resync Database');
    initial();
}); */

// Production
db.sequelize.sync();

app.get("/", (req, res) => {
    res.json({
        "message": quote.getRandomQuote()
    });
});

require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

function initial() {
    Role.create({
        id: 1,
        name: "user"
    });

    Role.create({
        id: 2,
        name: "moderator"
    });

    Role.create({
        id: 3,
        name: "admin"
    });
}