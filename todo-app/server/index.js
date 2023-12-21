const express = require("express");
const app = express();
const cors = require("cors");

require("dotenv").config();

const PORT = process.env.PORT || 4000; // the port no. will come from 1-process.env(PORT=3000) or 2-4000 (by default)

// Middleware to parse/fetch json from the request body => used by handler function in controller
app.use(express.json());
app.use(cors());

// import All routes 
const routes = require("./routes/ToDoRoutes");
app.use("/api", routes);

// Now start server
app.listen(PORT , () => {
  console.log(`server started at ${PORT}`)
})

// Connect express to Database with the help of mongoose
const dbConnect = require("./config/database"); // getting dbConnect function from the database
dbConnect(); // establishing Connection express to Database

// Default Route
app.get("/" , (req , res) => {
  res.send(`<h1> This is HOMEPAGE Body </h1>`)
})
