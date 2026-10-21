import { legalIdentity } from "@/content/legal";

export function subscriptionConsentError(input: {
  consent: unknown;
  policyVersion: unknown;
}): "consent_required" | "policy_version" | null {
  if (input.consent !== true) return "consent_required";
  if (input.policyVersion !== legalIdentity.policyVersion) return "policy_version";
  return null;
}
