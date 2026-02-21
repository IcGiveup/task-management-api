const express = require("express");
const cors = require("cors");
const { swaggerUi, specs } = require("./config/swagger")

const authRoutes = require("./routes/auth.routes");
const taskRoutes = require("./routes/task.routes");
const errorMiddleware = require("./middleware/error.middleware");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);

app.use(errorMiddleware);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

module.exports = app;