import express from "express";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();
import ErrorMiddleware from "./router/ErrorRouter.js";
import { setupApplication } from "./config/setupApplication.js";
import AuthenticationRouter from "./router/AuthenticationRouter.js";
import ChallengeRouter from "./router/ChallengeRouter.js";
import CompetitionRouter from "./router/CompetitionRouter.js";

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Setup CORS
app.use(cors());

// Setting Up the Application
setupApplication();

// Routes
app.get("/", (req, res) => {
    res.send("Hello, Express with ES6!");
});

app.use("/auth", AuthenticationRouter);
app.use("/challenge", ChallengeRouter);
app.use("/competition", CompetitionRouter);

app.use(ErrorMiddleware);

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
