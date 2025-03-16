import express from "express";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();
import ErrorMiddleware from "../src/router/ErrorRouter.js";
import { setupApplication } from "../src/config/setupApplication.js";
import AuthenticationRouter from "../src/router/AuthenticationRouter.js";
import ChallengeRouter from "../src/router/ChallengeRouter.js";
import CompetitionRouter from "../src/router/CompetitionRouter.js";
import UserRouter from "../src/router/UserRouter.js";
import StudentRouter from "../src/router/StudentRouter.js";
import LeaderboardRouter from "../src/router/LeaderboardRouter.js";
import TeamRouter from "../src/router/TeamRouter.js";

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Setup CORS for this url: https://iad-dcs-uok.netlify.app/
app.use(cors({
    origin: ["https://iad-dcs-uok.netlify.app", "http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
}));

// Setting Up the Application
setupApplication();

// Routes
app.get("/", (req, res) => {
    res.send("The Server is up and Running!");
});

app.use("/auth", AuthenticationRouter);
app.use("/user", UserRouter);
app.use("/challenge", ChallengeRouter);
app.use("/competition", CompetitionRouter);
app.use("/team", TeamRouter);
app.use("/student", StudentRouter);
app.use("/leaderboard", LeaderboardRouter);

app.use(ErrorMiddleware);

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

export default app;
