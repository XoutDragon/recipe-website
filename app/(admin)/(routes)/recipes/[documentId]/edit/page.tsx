"use client";

import { Id } from "@/convex/_generated/dataModel";
import dynamic from "next/dynamic";
import { useMemo } from "react";

interface DocumentIdPageProps {
    params: {
        documentId: Id<"documents">;
    };
}

const DocumentIdPage = ({ params }: DocumentIdPageProps) => {
    const Editor = useMemo(
        () => dynamic(() => import("@/components/editor"), { ssr: false }),
        [],
    );
};
