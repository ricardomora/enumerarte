import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  subscriptions: defineTable({
    email: v.string(),
    createdAt: v.number(),
    /** Versión de la política que la persona aceptó al suscribirse. */
    policyVersion: v.optional(v.string()),
  }).index("by_email", ["email"]),
});
