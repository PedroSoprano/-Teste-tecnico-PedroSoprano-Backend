import { createPolicyService } from "../services/createPolicy.service";
import { listPolicyService } from "../services/listPolicy.service";

export const createPolicyController = async (request, response) => {
  const policy = request.body;
  const newPolicy = await createPolicyService(policy);
  return response.status(201).json(newPolicy);
};

export const listPolicyController = async (request, response) => {
  const policy = listPolicyService();
  return response.json(policy);
};
