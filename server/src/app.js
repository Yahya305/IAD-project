import express from "express";
import dotenv from "dotenv";
dotenv.config();
import ErrorMiddleware from "./router/ErrorRouter.js";

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Routes
app.get("/", (req, res) => {
    res.send("Hello, Express with ES6!");
});

app.use(ErrorMiddleware);

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
