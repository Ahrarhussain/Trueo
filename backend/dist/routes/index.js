"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
/**
 * @openapi
 * /:
 *   get:
 *     summary: Health check for Trueo API
 *     responses:
 *       200:
 *         description: Returns a Hello message
 */
router.get("/", (req, res) => {
    res.send({ message: "Hello, Trueo!" });
});
exports.default = router;
