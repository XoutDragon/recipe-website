"use client";

import { Id } from "@/convex/_generated/dataModel";

import { useEdgeStore } from "@/lib/edgestore";

import {
    BlockNoteSchema,
    defaultBlockSpecs,
    filterSuggestionItems,
    getDefaultSlashMenuItems,
    PartialBlock,
    insertOrUpdateBlock,
} from "@blocknote/core";
import { SuggestionMenuController, useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/shadcn";

import "@blocknote/react/style.css";
import "@blocknote/core/fonts/inter.css";
import "@blocknote/shadcn/style.css";

import { Alert } from "./editor-ext/Alert";
import { RiAlertFill } from "react-icons/ri";
import { Youtube } from "./editor-ext/Youtube";
import { FaYoutube } from "react-icons/fa";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";

interface EditorProps {
    id: Id<"documents">;
    initialContent: string | undefined;
    editable?: boolean;
}

const schema = BlockNoteSchema.create({
    blockSpecs: {
        ...defaultBlockSpecs,
        alert: Alert,
        youtube: Youtube,
        // video: undefined as any,
    },
});

const insertYoutube = (editor: typeof schema.BlockNoteEditor) => ({
    title: "Youtube",
    onItemClick: () => {
        insertOrUpdateBlock(editor, {
            type: "youtube",
        });
    },
    group: "Media",
    icon: <FaYoutube />,
});

const insertAlert = (editor: typeof schema.BlockNoteEditor) => ({
    title: "Alert",
    onItemClick: () => {
        insertOrUpdateBlock(editor, {
            type: "alert",
        });
    },
    aliases: [
        "alert",
        "notification",
        "emphasize",
        "warning",
        "error",
        "info",
        "success",
    ],
    group: "Other",
    icon: <RiAlertFill />,
});

const Editor = ({ id, initialContent, editable = true }: EditorProps) => {
    const update = useMutation(api.documents.update);
    const { edgestore } = useEdgeStore();

    async function uploadFile(file: File) {
        const url = await edgestore.publicFiles.upload({ file });
        return url.url;
    }

    const editor = useCreateBlockNote({
        initialContent: initialContent
            ? (JSON.parse(initialContent) as PartialBlock[])
            : undefined,
        uploadFile,
        schema,
    });

    return (
        <>
            <BlockNoteView
                theme={"light"}
                editor={editor}
                editable={editable}
                onChange={() =>
                    update({
                        id: id,
                        content: JSON.stringify(editor.document),
                    })
                }
                slashMenu={false}
            >
                <SuggestionMenuController
                    triggerCharacter="/"
                    getItems={async (query) =>
                        filterSuggestionItems(
                            [
                                ...getDefaultSlashMenuItems(editor),
                                insertAlert(editor),
                                insertYoutube(editor),
                            ],
                            query,
                        )
                    }
                />
            </BlockNoteView>
        </>
    );
};

export default Editor;
