import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import { Asterisk } from "lucide-react";

import { toast } from "sonner";

const ContactForm = () => {
    const GOOGLE_FORM_URL =
        "https://docs.google.com/forms/d/e/1FAIpQLScjiUXwO9pWiRJUZKkCOh0qvFPiXfRZOGEKmhZ_cpesPMq-cQ/formResponse";

    const FORM_IDS = {
        name: "entry.1516583794",
        email: "entry.819156710",
        message: "entry.2051562701",
    };

    return (
        <form
            action="https://docs.google.com/forms/d/e/1FAIpQLScjiUXwO9pWiRJUZKkCOh0qvFPiXfRZOGEKmhZ_cpesPMq-cQ/formResponse"
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
            <Label htmlFor="entry.1516583794">Full Name</Label>
            <Input
                type="text"
                name="entry.1516583794"
                placeholder="Full Name"
            />
            <Label htmlFor="entry.819156710" className="flex items-center">
                Email <Asterisk className="text-red-500" size={12} />
            </Label>
            <Input
                type="email"
                name="entry.819156710"
                placeholder="Email"
                required
            />
            <Label htmlFor="entry.2051562701">Leave a message...</Label>
            <Textarea name="entry.2051562701" placeholder="Subject" />
            <Button type="submit" className="w-full">
                Submit
            </Button>
        </form>
    );
};

export default ContactForm;
