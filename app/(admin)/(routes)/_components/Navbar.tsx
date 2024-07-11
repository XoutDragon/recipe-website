"use client";

import { act, useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";
import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";

const tabs = [
    {
        title: "Dashboard",
        href: "dashboard",
        value: "dashboard",
    },
    {
        title: "Recipes",
        href: "recipes",
        value: "recipes",
    },
    {
        title: "Settings",
        href: "settings",
        value: "settings",
    },
];

export const AdminNavbar = ({}: {}) => {
    const pathname = usePathname();
    const [active, setActive] = useState("");

    useEffect(() => {
        let p = pathname.split("/")[1];
        setActive(p[0].toUpperCase() + p.slice(1));
    }, [pathname]);

    return (
        <>
            <div className="mx-10 my-5 flex justify-between">
                <h1 className="text-xl font-bold md:text-4xl">{active}</h1>
                <Button
                    variant={"ghost"}
                    className="h-12 w-12 rounded-full"
                ></Button>
            </div>

            <div
                className={cn(
                    "no-visible-scrollbar relative mx-auto my-5 flex max-w-full items-center overflow-auto overflow-y-hidden rounded-full border p-1 [perspective:1000px] sm:overflow-visible md:w-1/2 lg:w-1/3",
                )}
            >
                {tabs.map((tab, idx) => (
                    <Link
                        key={tab.title}
                        className={cn("relative w-full rounded-full px-4 py-2")}
                        style={{
                            transformStyle: "preserve-3d",
                        }}
                        href={tab.href}
                    >
                        {active.toLowerCase() === tab.value && (
                            <motion.div
                                layoutId="clickedbutton"
                                transition={{
                                    type: "spring",
                                    bounce: 0.3,
                                    duration: 0.6,
                                }}
                                className={cn(
                                    "absolute inset-0 h-full w-full bg-gray-200 dark:bg-zinc-800",
                                    idx === 0 && "rounded-l-full",
                                    idx === 2 && "rounded-r-full",
                                )}
                            />
                        )}
                        <span className="relative block select-none text-center font-semibold text-black dark:text-white">
                            {tab.title}
                        </span>
                    </Link>
                ))}
            </div>
        </>
    );
};
