"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { useScrollTop } from "@/hooks/use-scroll-top";

import { Search } from "lucide-react";
import { Menu } from "lucide-react";
import { PiBread } from "react-icons/pi";

import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
    const router = useRouter();
    const scrolled = useScrollTop();

    return (
        <>
            {/*MOBILE*/}
            <nav
                className={cn(
                    "top-0 z-50 flex w-full items-center justify-between px-[10%] py-5 lg:hidden",
                    scrolled && "fixed",
                )}
            >
                <h2>
                    <Link href="/">My Earth Kitchen</Link>
                </h2>

                <div className="inline-flex gap-4">
                    <Button variant={"ghost"}>
                        <Search />
                    </Button>
                    <Button variant={"ghost"}>
                        <Menu />
                    </Button>
                </div>
            </nav>

            {/*DESKTOP*/}
            <nav
                className={cn(
                    "top-0 z-50 hidden w-full items-center justify-between bg-[#FDD1D1] pl-[10%] lg:flex",
                    scrolled && "fixed",
                )}
            >
                <h1>
                    <Link href="/">My Earth Kitchen</Link>
                </h1>

                <div className="inline-flex">
                    <Button
                        variant={"ghost"}
                        className="h-16 w-64 gap-x-2"
                        onClick={() => router.push("/recipes")}
                    >
                        <h1>RECIPES </h1> <PiBread size={32} />
                    </Button>
                    <Button variant={"ghost"} className="h-16 w-64 gap-x-2">
                        <h1>MENU</h1> <Menu size={32} />
                    </Button>
                    <Button
                        variant={"ghost"}
                        className="h-16 w-16 rounded-none bg-red-900"
                    >
                        <Search size={32} />
                    </Button>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
