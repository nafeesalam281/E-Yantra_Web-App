import express from "express";
import cors from "cors";

const app = express();

// ✅ Enable CORS (for frontend requests)
app.use(cors({
    origin: "*",
    credentials: true
}));

// ✅ Enable JSON parsing
app.use(express.json());  // <-- UNCOMMENT THIS
app.use(express.urlencoded({ extended: true }));  // <-- UNCOMMENT THIS

// ✅ Serve static files (optional)
// app.use(express.static("public")) 

// Routes Import
import userRoute from "./routes/user.routes.js";

// Routes Declaration
app.use("/api/v1", userRoute);

export { app };
