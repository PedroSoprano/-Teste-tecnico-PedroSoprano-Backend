import { Router } from "express";
import {
  createPolicyController,
  listPolicyController,
} from "../controllers/policyRule.controler";

export const policyRoutes = Router();

policyRoutes.post("", createPolicyController);
policyRoutes.get("", listPolicyController);
