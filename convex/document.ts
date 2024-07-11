import { v } from "convex/values";

import { mutation, query } from "./_generated/server";

export const create = mutation({
    args: {
        title: v.string(),
    },
    handler: async (ctx, args) => {
        // const identity = await ctx.auth.getUserIdentity();

        // if (!identity) {
        // 	throw new Error('Not authenticated');
        // }

        const document = await ctx.db.insert("documents", {
            title: args.title,
            isArchived: false,
            isPublished: false,
            dateCreated: Date.now(),
            lastUpdated: Date.now(),
        });

        return document;
    },
});
