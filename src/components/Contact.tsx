"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "./ui/textarea";
import { Resend } from "resend";

const formSchema = z.object({
  youremail: z.string().min(2, {
    message: "your Email must be at least 2 characters.",
  }),
  message: z.string().min(2, {
    message: "your Email must be at least 2 characters.",
  }),
});

const Contact = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      youremail: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "isayas2024@gmail.com",
      subject: "Message from contact form",
      text: "hello world",
    });
  }

  return (
    <div
      id="contact"
      className=" container mx-auto w-full gap-5 md:flex  mt-20 scroll-mt-28 "
    >
      <div className="flex-1">
        <h1 className="font-bold text-xl">Let's Connect Me</h1>
        <p className="text-gray-500">
          I'm always excited to discuss new projects and opportunities. Feel
          free to reach out and let's chat!
        </p>
        <div className="flex gap-5 my-3">
          <span>facebook</span>
          <span>facebook</span>
          <span>facebook</span>
          <span>facebook</span>
        </div>
      </div>
      <div className="flex-1">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="youremail"
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
