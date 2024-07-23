"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "./ui/textarea";
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";

const formSchema = z.object({
  senderEmail: z.string().min(2, {
    message: "Please Enter valid Email.",
  }),
  message: z.string().min(2, {
    message: "Your message should be at least 10 characters.",
  }),
});

const Contact = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      senderEmail: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const JSONdata = JSON.stringify(values);
    const endpoint = "/api/send";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();

    if (response.status === 200) {
      form.reset();
    }
  }

  return (
    <div
      id="contact"
      className=" container mx-auto w-full gap-5 md:flex  mt-20 scroll-mt-28 "
    >
      <div className="flex-1">
        <h1 className="font-bold text-xl">Let us Connect Me</h1>
        <p className="text-gray-500">
          I am always excited to discuss new projects and opportunities. Feel
          free to reach out and Let us chat!
        </p>
        <div className="flex flex-wrap sm:flex-nowrap gap-5 my-3">
          <Link href={"https://www.linkedin.com/in/isayas7/"} target="_blanck">
            <FaLinkedin className=" size-7 sm:size-10 md:size-14" />
          </Link>
          <Link href={"https://github.com/Isayas7"} target="_blanck">
            <FaGithub className=" size-7 sm:size-10 md:size-14" />
          </Link>
          <Link href={""}>
            <FaFacebookF className=" size-7 sm:size-10 md:size-14" />
          </Link>
          <Link href={""}>
            <FaXTwitter className=" size-7 sm:size-10 md:size-14" />
          </Link>
          <Link href={""}>
            <FaInstagram className=" size-7 sm:size-10 md:size-14" />
          </Link>
        </div>
      </div>
      <div className="flex-1">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="senderEmail"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your Email</FormLabel>
                  <FormControl>
                    <Input placeholder="your email" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      placeholder="Type your message here."
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <button
              className="w-full p-4 rounded-md bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
              type="submit"
            >
              Send Message
            </button>
          </form>
        </Form>
      </div>
    </div>
  );
};
export default Contact;
