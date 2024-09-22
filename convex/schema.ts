import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
    documents: defineTable({
        title: v.string(),
        isArchived: v.boolean(),
        content: v.optional(v.string()),
        thumbnail: v.optional(v.string()),
        isPublished: v.boolean(),
    }),
    tags: defineTable({
        tagName: v.string(),
        category: v.string(),
    }),
    documentTags: defineTable({
        documentId: v.id("documents"),
        tagId: v.id("tags"),
    })
        .index("by_documentId", ["documentId"])
        .index("by_tagId", ["tagId"]),
});
