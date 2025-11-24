import express from "express"
import cors from "cors";
import logger from "../logger.js";
import morgan from "morgan";


const app = express();
const morganFormat = ":method :url :status :response-time ms";

// Middleware
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
app.use(
  morgan(morganFormat, {
    stream: {
      write: (message) => {
        const logObject = {
          method: message.split(" ")[0],
          url: message.split(" ")[1],
          status: message.split(" ")[2],
          responseTime: message.split(" ")[3],
        };
        logger.info(JSON.stringify(logObject));
      },
    },
  })
);

// Routes



export default app;