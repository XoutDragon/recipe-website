"use client";

import { Id } from "@/convex/_generated/dataModel";

import { useEdgeStore } from "@/lib/edgestore";

import {
    filterSuggestionItems,
    getDefaultSlashMenuItems,
    PartialBlock,
} from "@blocknote/core";
import { SuggestionMenuController, useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/mantine";

interface EditorProps {
    id?: Id<"documents">;
    initialContent?: string | undefined;
    editable?: boolean;
}

const Editor = ({ id, initialContent, editable = true }: EditorProps) => {
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
    });

    return (
        <>
            <BlockNoteView
                theme={"light"}
                editor={editor}
                editable={editable}
                onChange={() => {}}
                slashMenu={false}
            >
                <SuggestionMenuController
                    triggerCharacter="/"
                    getItems={async (query) =>
                        filterSuggestionItems(
                            [...getDefaultSlashMenuItems(editor)],
                            query,
                        )
                    }
                />
            </BlockNoteView>
        </>
    );
};

export default Editor;
