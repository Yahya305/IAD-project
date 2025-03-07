import express from "express";
import dotenv from "dotenv";
dotenv.config();
import ErrorMiddleware from "./router/ErrorRouter.js";
import AuthenticationRouter from "./router/AuthenticationRouter.js";
import ChallengeRouter from "./router/ChallengeRouter.js";
import { Initializer } from "./utils/Initializer.js";
import CompetitionRouter from "./router/CompetitionRouter.js";

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Setting Up the Application
Initializer.init();

// Routes
app.get("/", (req, res) => {
    res.send("Hello, Express with ES6!");
});

app.use("/auth", AuthenticationRouter);
app.use("/challenge", ChallengeRouter);
app.use("/comptition", CompetitionRouter);

app.use(ErrorMiddleware);

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
