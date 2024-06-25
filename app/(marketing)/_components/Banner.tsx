"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

const MarketingBanner = () => {
    const router = useRouter();

    return (
        <section className="relative flex h-[58.3rem] flex-grow flex-col">
            <Image
                src="/banner.webp"
                alt="Marketing Banner"
                fill
                className="absolute left-0 top-0 -z-10 object-cover"
            />
            <div className="relative top-1/2 w-full text-center">
                <Button
                    variant="outline"
                    onClick={() => router.push("/recipes")}
                >
                    View Recipes
                </Button>
            </div>
        </section>
    );
};

export default MarketingBanner;
