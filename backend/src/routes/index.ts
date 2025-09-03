import { Router, Request, Response } from "express";

const router = Router();

/**
 * @openapi
 * /:
 *   get:
 *     summary: Health check for Trueo API
 *     responses:
 *       200:
 *         description: Returns a Hello message
 */
router.get("/", (req: Request, res: Response) => {
  res.send({ message: "Hello, Trueo!" });
});

export default router;
