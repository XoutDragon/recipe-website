"use client";

import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { Asterisk } from "lucide-react";

import { toast } from "sonner";
import {
    FaArrowCircleRight,
    FaFacebook,
    FaInstagram,
    FaTiktok,
    FaYoutube,
} from "react-icons/fa";

const Contact = () => {
    return (
        <>
            <h1 className="text-center">Contact</h1>
            <div className="grid lg:grid-cols-2">
                <section className="mx-auto flex w-11/12 flex-col justify-around lg:w-1/2">
                    <h1>For Business Inquiries</h1>
                    <p className="font-medium italic hover:underline">
                        <Link
                            href=""
                            className="group flex items-center gap-x-2"
                        >
                            test@gmail.com
                            <FaArrowCircleRight className="duration-200 ease-linear group-hover:translate-x-3" />
                        </Link>
                    </p>
                    <div className="space-y-2">
                        <h1>Follow Me</h1>
                        <div className="-ml-4 flex flex-auto">
                            <Button variant={"ghost"}>
                                <FaYoutube size={32} />
                            </Button>
                            <Button variant={"ghost"}>
                                <FaTiktok size={32} />
                            </Button>
                            <Button variant={"ghost"}>
                                <FaInstagram size={32} />
                            </Button>
                            <Button variant={"ghost"}>
                                <FaFacebook size={32} />
                            </Button>
                        </div>
                    </div>
                </section>
                <form
                    action="https://docs.google.com/forms/d/e/1FAIpQLSc95V6gYJkAaEXNPFDpnby7JbLWMslhM3F6CPl0aaAtqiodTg/formResponse"
                    className="mx-auto w-11/12 space-y-2 lg:w-1/2"
                    onSubmit={(e) => {
                        e.preventDefault();
                        const form = e.target as HTMLFormElement;
                        const formData = new FormData(form);
                        fetch(form.action, {
                            method: "POST",
                            body: formData,
                        });

                        toast("Message sent!");
                    }}
                >
                    <Label htmlFor="entry.778388275">Full Name</Label>
                    <Input
                        type="text"
                        name="entry.778388275"
                        placeholder="Full Name"
                    />
                    <Label
                        htmlFor="entry.2048398826"
                        className="flex items-center"
                    >
                        Email <Asterisk className="text-red-500" size={12} />
                    </Label>
                    <Input
                        type="email"
                        name="entry.2048398826"
                        placeholder="Email"
                        required
                    />
                    <Label htmlFor="entry.510440441">Leave a message...</Label>
                    <Input
                        type="text"
                        name="entry.510440441"
                        placeholder="Subject"
                    />
                    <Button type="submit" className="w-full">
                        Submit
                    </Button>
                </form>
            </div>
        </>
    );
};

export default Contact;

// https://docs.google.com/forms/d/e/1FAIpQLSc95V6gYJkAaEXNPFDpnby7JbLWMslhM3F6CPl0aaAtqiodTg/formResponse

// entry.778388275=uwu

// entry.2048398826=owo

// entry.510440441=qwq
