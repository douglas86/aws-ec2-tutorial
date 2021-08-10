import express from "express";
import cors from "cors";

// routes
import homeRoutes from "./router/homeRoutes";

const app = express();

const PORT = process.env.PORT || 5000;

app
  // middleware
  .use(express())
  .use(cors())
  //   routes
  .use("/", homeRoutes)
  //   listening on
  .listen(PORT, console.log(`server running on port ${PORT}`));
