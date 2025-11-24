import express from "express"
import cors from "cors";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(
  cors({
    origin:
      process.env.CORS_ORIGIN?.split(",") ||
      "http://localhost://localhost:4000",
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-type", "Authorization"],
  })
);

app.get("/", (req, res) => {
  res.status(200).json("Hello World!");
});


export default app;