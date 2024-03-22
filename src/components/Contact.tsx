"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
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

const formSchema = z.object({
  youremail: z.string().min(2, {
    message: "your Email must be at least 2 characters.",
  }),
  subject: z.string().min(2, {
    message: "your Email must be at least 2 characters.",
  }),
});

const Contact = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      youremail: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className="  w-full gap-5 md:flex">
      <div className="flex-1">
        <h1 className="font-bold text-xl">Let's Connect Me</h1>
        <p className="text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ipsam
          facilis laudantium, maiores sequi vero.
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
                    <Input placeholder="isayas@gmail.com" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Subject</FormLabel>
                  <FormControl>
                    <Input placeholder="Just say hi" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <Textarea placeholder="Type your message here." />

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
