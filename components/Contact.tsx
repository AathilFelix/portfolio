import React from "react";
import Link from "next/link";
import { VscGithubAlt as Github } from "react-icons/vsc";
import { BsTwitterX as X } from "react-icons/bs";
import { SlSocialLinkedin as Linkedin } from "react-icons/sl";
import { GoMail as Mail } from "react-icons/go";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section className="text-center py-8">
      <h1 className="text-xl font-bold mb-2">Get in Touch</h1>
      <p className="text-muted-foreground mb-6">Feel free to say hello 👋!</p>

      <div className="flex justify-center gap-4 flex-wrap">
        <Button variant="outline" size="sm" asChild>
          <Link href="https://github.com/AathilFelix" target="_blank">
            <Github className="w-4 h-4 mr-2" /> GitHub
          </Link>
        </Button>

        <Button variant="outline" size="sm" asChild>
          <Link href="https://linkedin.com/in/AathilFelix" target="_blank">
            <Linkedin className="w-4 h-4 mr-2" /> LinkedIn
          </Link>
        </Button>

        <Button variant="outline" size="sm" asChild>
          <Link href="https://x.com/AathilOfficial" target="_blank">
            <X className="w-4 h-4 mr-2" /> X
          </Link>
        </Button>

        <Button variant="outline" size="sm" asChild>
          <Link href="mailto:me@aathil.com" target="_blank">
            <Mail className="w-4 h-4 mr-2" /> Email
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default Contact;
