import express from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";

const app = express();
const PORT = process.env.PORT || 3000;

const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.use(express.json());
app.use(express.static(path.join(__dirname, "../public")));

app.get("/api/health", (req, res) => {
    res.json({
        status: "ok",
        application: "HC Prize Tracker"
    });
});

app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`)
});