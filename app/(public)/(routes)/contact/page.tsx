"use client";

import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

import {
    FaArrowCircleRight,
    FaFacebook,
    FaInstagram,
    FaTiktok,
    FaYoutube,
} from "react-icons/fa";
import ContactForm from "./_components/Form";

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
                <ContactForm />
            </div>
        </>
    );
};

export default Contact;

// https://docs.google.com/forms/d/e/1FAIpQLSc95V6gYJkAaEXNPFDpnby7JbLWMslhM3F6CPl0aaAtqiodTg/formResponse

// entry.778388275=uwu

// entry.2048398826=owo

// entry.510440441=qwq
