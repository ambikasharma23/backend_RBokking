const express = require("express");
const app = express();
const port = 3005;
const cors = require("cors");
const db = require("./models");
const dotenv = require("dotenv");

dotenv.config();
app.use(express.json());
app.use(cors());

// app.use("/", require("./routes/restaurantsroutes"));
app.use("/",require("./routes/customersroutes"))
db.sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`Server running at http://127.0.0.1:${port}`);
    });
});
