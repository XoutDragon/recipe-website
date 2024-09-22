"use client";

import { Button } from "@/components/ui/button";
import { PlusCircleIcon } from "lucide-react";

import { useMutation, useQuery } from "convex/react";

import { api } from "@/convex/_generated/api";
import { useRouter } from "next/navigation";

import { useToast } from "@/components/ui/use-toast";
import Link from "next/link";

const RecipesPage = () => {
    const { toast } = useToast();
    const router = useRouter();
    const create = useMutation(api.documents.create);

    const recipes = useQuery(api.documents.getRecipes, {
        public: false,
    });

    const onCreate = () => {
        const promise = create({ title: "Untitled" }).then((documentId) => {
            router.push(`/recipes/${documentId}/edit`);
        });

        promise
            .then(() => {
                toast({
                    title: "Recipe created!",
                });
            })
            .catch(() => {
                toast({
                    title: "Failed to create recipe.",
                });
            });
    };

    return (
        <main className="relative h-full w-full overflow-hidden">
            <div className="3xl:grid-cols-6 mx-auto grid md:w-3/4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
                <Button
                    className="h-80 w-64 border-2 border-dashed"
                    variant={"ghost"}
                    onClick={onCreate}
                >
                    <PlusCircleIcon className="mx-auto text-gray-400" />
                </Button>
                {recipes?.map((recipe, idx) => (
                    <Link
                        key={recipe._id}
                        className="w-60"
                        href={`/recipes/${recipe._id}/edit`}
                    >
                        {/* <Image
                            src={recipe.thumbnail || "/no-img.svg"}
                            alt={recipe.title}
                            width={250}
                            height={250}
                        /> */}
                        <Button className="flex h-16 w-60 items-center justify-center bg-white text-black hover:bg-red-400">
                            <h3 className="font-semibold">{recipe.title}</h3>
                        </Button>
                    </Link>
                ))}
            </div>
        </main>
    );
};

export default RecipesPage;
