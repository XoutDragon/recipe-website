import { v } from "convex/values";

import { mutation, query } from "./_generated/server";

// Creates Recipe Document
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
        });

        return document;
    },
});

// Gets all Recipe Documents + Filter
export const getRecipes = query({
    args: {
        public: v.boolean(),
    },
    handler: async (ctx, args) => {
        let documents;

        if (args.public) {
            documents = await ctx.db
                .query("documents")
                .filter(
                    (q) =>
                        q.eq(q.field("isArchived"), false) &&
                        q.eq(q.field("isPublished"), true),
                )
                .order("desc")
                .collect();
        } else {
            documents = await ctx.db.query("documents").order("desc").collect();
        }

        return documents;
    },
});

// Get Recipe by ID
export const getById = query({
    args: {
        documentId: v.id("documents"),
    },
    handler: async (ctx, args) => {
        const existingDocument = await ctx.db.get(args.documentId);

        if (!existingDocument) {
            throw new Error("Document not found");
        }

        const document = await ctx.db.get(args.documentId);

        return document;
    },
});

export const archive = mutation({
    args: {
        id: v.id("documents"),
    },
    handler: async (ctx, args) => {
        // const identity = await ctx.auth.getUserIdentity();

        // if (!identity) {
        //     throw new Error("Not authenticated");
        // }

        const existingDocument = await ctx.db.get(args.id);

        if (!existingDocument) {
            throw new Error("Document not found");
        }

        const document = await ctx.db.patch(args.id, {
            isArchived: true,
        });

        return document;
    },
});

export const update = mutation({
    args: {
        id: v.id("documents"),
        title: v.optional(v.string()),
        content: v.optional(v.string()),
        thumbnail: v.optional(v.string()),
        isPublished: v.optional(v.boolean()),
    },
    handler: async (ctx, args) => {
        // const identity = await ctx.auth.getUserIdentity();

        // if (!identity) {
        //     throw new Error("Not authenticated");
        // }

        const { id, ...updates } = args;

        const existingDocument = await ctx.db.get(id);

        if (!existingDocument) {
            throw new Error("Document not found");
        }

        const document = await ctx.db.patch(id, {
            ...updates,
        });

        return document;
    },
});
