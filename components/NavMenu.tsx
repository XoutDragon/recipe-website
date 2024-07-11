import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { Menu, XIcon } from "lucide-react";

export function NavMenu() {
    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button
                    variant={"ghost"}
                    className="h-16 w-64 gap-x-2 rounded-none"
                >
                    <h1>MENU</h1> <Menu size={32} />
                </Button>
            </PopoverTrigger>
            <PopoverContent
                className="w-screen rounded-none border-none bg-red-950 px-8 outline-none"
                sideOffset={0}
            >
                <div className="flex justify-end">
                    <Button variant={"ghost"} className="w-16">
                        <XIcon />
                    </Button>
                </div>
                <div className=""></div>
            </PopoverContent>
        </Popover>
    );
}
