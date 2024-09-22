import { createReactBlockSpec } from "@blocknote/react";

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { FaYoutube } from "react-icons/fa";
import { cn } from "@/lib/utils";

import { ResizeHandlesWrapper } from "@blocknote/react";

export const Youtube = createReactBlockSpec(
    {
        type: "youtube",
        propSchema: {
            url: {
                default: "" as const,
            },
        },
        content: "none",
    },
    {
        render: (props) => {
            {
                let url = "";
                return (
                    <div
                        className={cn(
                            !props.block.props.url &&
                                "w-full rounded-md bg-zinc-100 px-4 py-3",
                            props.block.props.url &&
                                "flex w-full justify-center",
                        )}
                    >
                        {props.block.props.url ? (
                            <iframe
                                width="560"
                                height="315"
                                src={props.block.props.url}
                                title="YouTube video player"
                                allow="accelerometer; clipboard-write; encrypted-media; gyroscope;"
                                allowFullScreen
                            />
                        ) : (
                            <AlertDialog>
                                <AlertDialogTrigger className="w-full">
                                    <Button
                                        variant={"ghost"}
                                        size={"wide"}
                                        className="w-full justify-start gap-x-2"
                                    >
                                        <FaYoutube />
                                        Add Video
                                    </Button>
                                </AlertDialogTrigger>
                                <AlertDialogContent>
                                    <AlertDialogHeader>
                                        <AlertDialogTitle>
                                            Place YouTube video URL here:
                                        </AlertDialogTitle>
                                        <AlertDialogDescription>
                                            <Input
                                                type="text"
                                                placeholder="URL"
                                                onChange={(e) => {
                                                    url = e.currentTarget.value;
                                                }}
                                            />
                                        </AlertDialogDescription>
                                    </AlertDialogHeader>
                                    <AlertDialogFooter>
                                        <AlertDialogCancel>
                                            Cancel
                                        </AlertDialogCancel>
                                        <AlertDialogAction
                                            onClick={() =>
                                                props.editor.updateBlock(
                                                    props.block,
                                                    {
                                                        type: "youtube",
                                                        props: {
                                                            url: url.replace(
                                                                "/watch?v=",
                                                                "/embed/",
                                                            ),
                                                        },
                                                    },
                                                )
                                            }
                                        >
                                            Embed
                                        </AlertDialogAction>
                                    </AlertDialogFooter>
                                </AlertDialogContent>
                            </AlertDialog>
                        )}
                    </div>
                );
            }
        },
    },
);
