"use client";

import { Button } from "@/components/ui/button";
import { PlusCircleIcon } from "lucide-react";

const RecipesPage = () => {
    return (
        <main className="relative h-full w-full overflow-hidden">
            <div className="mx-auto grid w-3/4 grid-flow-col gap-4">
                <Button
                    className="h-80 w-64 border-2 border-dashed"
                    variant={"ghost"}
                >
                    <PlusCircleIcon className="mx-auto text-gray-400" />
                </Button>
            </div>
        </main>
    );
};

export default RecipesPage;
