import { policyRule } from "../database";

export const createPolicyService = async (policy) => {
  if (policy.critic == null || policy.great == null) {
    throw new Error();
  }
  const newPolicy = {
    critic: parseFloat(policy.critic),
    good: parseFloat(policy.good),
    great: parseFloat(policy.great),
  };
  policyRule = newPolicy;
  return policyRule;
};
