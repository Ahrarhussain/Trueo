import express from "express";
import routes from "./routes/index";
import { setupSwagger } from "./swagger";

const app = express();

app.use(express.json());

// Setup Swagger
setupSwagger(app);

// Register routes
app.use('/', routes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
    console.log(`Swagger docs at http://localhost:${PORT}/api-docs`);
})