import { v } from "convex/values";
import { query, mutation } from "./_generated/server";

export const current = query({
  args: {},
  handler: async (ctx) => {
    // Simple user lookup without auth for now
    return null;
  },
});

export const create = mutation({
  args: {
    name: v.optional(v.string()),
    email: v.optional(v.string()),
    image: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("users", args);
  },
});
