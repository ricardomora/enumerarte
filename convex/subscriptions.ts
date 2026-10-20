import { v } from "convex/values";
import { mutation } from "./_generated/server";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/** Guarda un correo para promociones y ofertas. Si ya existe, no lo duplica. */
export const subscribe = mutation({
  args: { email: v.string() },
  returns: v.null(),
  handler: async (ctx, args) => {
    const email = args.email.trim().toLowerCase();
    if (!EMAIL_PATTERN.test(email) || email.length > 254) {
      throw new Error("Correo inválido");
    }

    const existing = await ctx.db
      .query("subscriptions")
      .withIndex("by_email", (q) => q.eq("email", email))
      .unique();
    if (existing) return null;

    await ctx.db.insert("subscriptions", {
      email,
      createdAt: Date.now(),
    });
    return null;
  },
});
