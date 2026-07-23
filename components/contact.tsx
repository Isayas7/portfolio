"use client";

import React, { useRef, useState } from "react";
import { Github, Linkedin, Mail, MapPin, Send, Loader2, MessageSquare } from "lucide-react";
import toast from "react-hot-toast";
import { personalInfo } from "@/lib/data";
import { motion } from "framer-motion";

type FormType = {
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
    const data = Object.fromEntries(formData) as FormType;

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success("Message sent successfully!");
        formRef.current?.reset();
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsPending(false);
    }
  }

  return (
    <section id="contact" className="py-12 md:py-16 scroll-mt-28 mb-16">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* SECTION HEADER */}
          <div className="text-left">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold flex items-center gap-3 text-zinc-900 dark:text-zinc-100">
              <span className="p-2 rounded-lg bg-emerald-500/10 text-emerald-500 dark:text-emerald-400">
                <MessageSquare className="w-6 h-6" />
              </span>
              Get In Touch
            </h2>
            <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-400 mt-2">
              Interested in collaborating or have a question? Send me a message or connect via social platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {/* CONTACT INFO */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="md:col-span-2 space-y-4"
            >
              <div className="p-5 rounded-2xl glass-card border border-zinc-200/80 dark:border-zinc-800/80 space-y-4">
                <h3 className="font-semibold text-lg text-zinc-900 dark:text-zinc-100">
                  Contact Details
                </h3>

                <div className="space-y-3 text-sm">
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="flex items-center gap-3 text-zinc-600 dark:text-zinc-400 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors"
                  >
                    <div className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-emerald-500 dark:text-emerald-400">
                      <Mail className="w-4 h-4" />
                    </div>
                    <span className="truncate">{personalInfo.email}</span>
                  </a>

                  <div className="flex items-center gap-3 text-zinc-600 dark:text-zinc-400">
                    <div className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-emerald-500 dark:text-emerald-400">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <span>{personalInfo.location}</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-zinc-200/50 dark:border-zinc-800/50">
                  <h4 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-3">
                    Social Links
                  </h4>
                  <div className="flex items-center gap-3">
                    <a
                      href={personalInfo.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-lg border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-emerald-500 dark:hover:text-emerald-400 hover:border-emerald-500/50 transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                      href={personalInfo.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-lg border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-emerald-500 dark:hover:text-emerald-400 hover:border-emerald-500/50 transition-colors"
                      aria-label="GitHub"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* FORM */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="md:col-span-3"
            >
              <form
                onSubmit={handleSubmit}
                ref={formRef}
                className="p-6 rounded-2xl glass-card border border-zinc-200/80 dark:border-zinc-800/80 space-y-4"
              >
                <div>
                  <label
                    htmlFor="youremail"
                    className="block text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-1"
                  >
                    Your Email Address
                  </label>
                  <input
                    id="youremail"
                    type="email"
                    name="youremail"
                    required
                    maxLength={100}
                    placeholder="name@example.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-900/90 border border-zinc-200 dark:border-zinc-800 text-sm text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    maxLength={1000}
                    rows={4}
                    placeholder="Write your message here..."
                    className="w-full px-4 py-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-900/90 border border-zinc-200 dark:border-zinc-800 text-sm text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all resize-none"
                  />
                </div>

                <button
                  disabled={isPending}
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium text-sm text-white bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600 shadow-lg shadow-emerald-500/25 transition-all duration-200 hover:scale-[1.01] active:scale-100 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isPending ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
