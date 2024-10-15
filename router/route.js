import { Router } from "express";
import { getMatch,sendMatch } from "../controller/match.js";
const route = Router();

route.get("/getMatch/:id", getMatch);
route.post("/sendMatch", sendMatch);

export default route;