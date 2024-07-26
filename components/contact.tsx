"use client";
import Link from "next/link";
import {
  Facebook,
  Github,
  Instagram,
  Linkedin,
  LoaderCircle,
  X,
} from "lucide-react";
import { useRef, useState } from "react";
import toast from "react-hot-toast";

type formType = {
  youremail: string;
  message: string;
};

const Contact = () => {
  const [isPending, setIsPending] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsPending(true);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData) as formType;

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.status === 200) {
        toast.success("Message sent secussfully");
        formRef.current?.reset();
      } else {
        toast.error("some thing goes wrong, try again");
      }
    } catch (error: any) {
      toast.error("some thing goes wrong, try again");
    } finally {
      setIsPending(false);
    }
  }

  return (
    <section
      id="contact"
      className=" container  w-full mx-auto scroll-mt-28 mb-36"
    >
      <h2 className="text-3xl font-bold tracking-wider sm:text-5xl text-center mb-8">
        Contact
      </h2>
      <div className="md:flex gap-10   ">
        <div className="flex-1 mb-10 md:mb-0">
          <h1 className="font-bold text-xl">Let us Connect Me</h1>
          <p className="text-gray-500">
            I am always excited to discuss new projects and opportunities. Feel
            free to reach out and Let us chat!
          </p>
          <div className="flex flex-wrap sm:flex-nowrap gap-5 my-3">
            <Link
              href={"https://www.linkedin.com/in/isayas7/"}
              target="_blanck"
            >
              <Linkedin className="size-9" />
            </Link>
            <Link href={"https://github.com/Isayas7"} target="_blanck">
              <Github className="size-9" />
            </Link>
            <Link href={""}>
              <Facebook className="size-9" />
            </Link>
            <Link href={""}>
              <X className="size-9" />
            </Link>
            <Link href={""}>
              <Instagram className="size-9" />
            </Link>
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          ref={formRef}
          className=" w-full md:w-1/2 flex flex-col gap-4"
        >
          <input
            type="email"
            placeholder="Your email..."
            maxLength={50}
            required
            name="youremail"
            className="w-full bg-transparent ring-1 ring-gray-500 p-2 rounded-md  outline-none"
          />
          <textarea
            name="message"
            required
            maxLength={500}
            placeholder="Type your message here..."
            className="w-full min-h-[80px] bg-transparent ring-1 ring-gray-500 px-3 py-2 rounded-md outline-none  text-sm  disabled:cursor-not-allowed "
          />

          <button
            disabled={isPending}
            type="submit"
            className="w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-2 px-4 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
          >
            {isPending ? (
              <div className="flex  justify-center items-center ">
                <LoaderCircle className="text-5xl text-jade animate-spin" />
              </div>
            ) : (
              "Send message"
            )}
          </button>
        </form>
      </div>
    </section>
  );
};
export default Contact;
