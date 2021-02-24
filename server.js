const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const app = express();

const usersRoutes = require("./routes/userRoutes");
const ordersRoutes = require("./routes/ordersRoutes");

const {Pool} = require("pg");

const { PORT } = process.env || 4000;  


app.use("/orders/", ordersRoutes);
app.use("/users/", usersRoutes);

app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`)
})