import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
    documents: defineTable({
        title: v.string(),
        isArchived: v.boolean(),
        content: v.optional(v.string()),
        thumbnail: v.optional(v.string()),
        isPublished: v.boolean(),
        lastUpdated: v.string(),
        dateCreated: v.string(),
        tags: v.optional(v.array(v.string())),
    }),
    tags: defineTable({
        tagName: v.string(),
    }),
});
