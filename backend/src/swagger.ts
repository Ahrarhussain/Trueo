import swaggerJSDoc, { Options } from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { Express } from "express";

const options: Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Trueo API",
      version: "1.0.0",
      description: "API documentation for Trueo backend",
    },
    servers: [
      {
        url: "http://localhost:5000", // replace with deployed backend URL later
      },
    ],
    paths: {},
  },
  apis: ["./src/routes/*.ts"], // path to your route files with JSDoc
};

const swaggerSpec = swaggerJSDoc(options);

export function setupSwagger(app: Express) {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}
