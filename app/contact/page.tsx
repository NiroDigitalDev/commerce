"use client";

import { Reveal } from "@/components/animations";
import { SectionHeader } from "@/components/shared";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Contact form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      {/* Hero Section */}
      <section className="section-spacing bg-white dark:bg-black">
        <div className="mx-auto max-w-7xl px-5">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <Reveal delay={0.1}>
              <Badge variant="secondary" className="mb-3.5 md:mb-5">
                Contact Us
              </Badge>
            </Reveal>
            <Reveal delay={0.2}>
              <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl">
                Get in Touch with Our{" "}
                <span className="text-primary">Matcha Experts</span>
              </h1>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="text-neutral-600 dark:text-neutral-400 text-lg">
                Have questions about our premium Japanese matcha? Whether you
                need brewing advice, product recommendations, or bulk order
                information, we're here to help.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section-spacing bg-neutral-50 dark:bg-neutral-900">
        <div className="mx-auto max-w-7xl px-5">
          <SectionHeader
            badge="Send us a message"
            title="We'd Love to"
            titleHighlight="Hear From You"
            description="Fill out the form below and our matcha specialists will get back to you within 24 hours"
            align="center"
          />

          <Reveal delay={0.5}>
            <div className="mx-auto max-w-3xl">
              <form
                onSubmit={handleSubmit}
                className="bg-white dark:bg-neutral-800 rounded-3xl p-8 md:p-12 space-y-6"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium text-neutral-900 dark:text-neutral-100"
                    >
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-neutral-900 dark:text-neutral-100"
                    >
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="subject"
                    className="text-sm font-medium text-neutral-900 dark:text-neutral-100"
                  >
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="What can we help you with?"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-neutral-900 dark:text-neutral-100"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your matcha needs, questions, or feedback..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="resize-none"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="section-spacing bg-white dark:bg-black">
        <div className="mx-auto max-w-7xl px-5">
          <SectionHeader
            badge="Get in touch"
            title="Other Ways to"
            titleHighlight="Reach Us"
            description="Choose your preferred method of communication"
            align="center"
          />

          <Reveal delay={0.5}>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {/* Email Card */}
              <div className="col-span-2 md:col-span-1 bg-neutral-50 dark:bg-neutral-900 rounded-xl md:rounded-2xl p-6 md:p-8 text-center space-y-3 md:space-y-4">
                <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-primary/10 dark:bg-primary/20">
                  <Mail className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                </div>
                <div className="space-y-1 md:space-y-2">
                  <h3 className="text-lg md:text-xl font-bold text-neutral-900 dark:text-white">
                    Email Us
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400 text-xs md:text-sm">
                    For product inquiries and bulk orders
                  </p>
                  <a
                    href="mailto:matcha@example.com"
                    className="text-primary font-semibold hover:underline inline-block text-sm md:text-base"
                  >
                    matcha@example.com
                  </a>
                </div>
              </div>

              {/* Phone Card */}
              <div className="bg-neutral-50 dark:bg-neutral-900 rounded-xl md:rounded-2xl p-6 md:p-8 text-center space-y-3 md:space-y-4">
                <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-primary/10 dark:bg-primary/20">
                  <Phone className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                </div>
                <div className="space-y-1 md:space-y-2">
                  <h3 className="text-lg md:text-xl font-bold text-neutral-900 dark:text-white">
                    Call Us
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400 text-xs md:text-sm">
                    Speak with our matcha experts
                  </p>
                  <a
                    href="tel:+1234567890"
                    className="text-primary font-semibold hover:underline inline-block text-sm md:text-base"
                  >
                    +1 (234) 567-890
                  </a>
                </div>
              </div>

              {/* Location Card */}
              <div className="bg-neutral-50 dark:bg-neutral-900 rounded-xl md:rounded-2xl p-6 md:p-8 text-center space-y-3 md:space-y-4">
                <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-primary/10 dark:bg-primary/20">
                  <MapPin className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                </div>
                <div className="space-y-1 md:space-y-2">
                  <h3 className="text-lg md:text-xl font-bold text-neutral-900 dark:text-white">
                    Visit Us
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400 text-xs md:text-sm">
                    Our tea house location
                  </p>
                  <p className="text-primary font-semibold text-sm md:text-base">
                    123 Tea District
                    <br />
                    Uji, Kyoto, Japan
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Business Hours Section */}
      <section className="section-spacing bg-neutral-50 dark:bg-neutral-900">
        <div className="mx-auto max-w-7xl px-5">
          <Reveal delay={0.3}>
            <div className="max-w-2xl mx-auto bg-white dark:bg-neutral-800 rounded-3xl p-8 md:p-12">
              <div className="text-center space-y-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 dark:bg-primary/20">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-neutral-900 dark:text-white">
                    Business Hours
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400">
                    Our matcha consultants are available to assist you
                  </p>
                </div>
                <div className="space-y-3 text-neutral-700 dark:text-neutral-300">
                  <div className="flex justify-between items-center max-w-sm mx-auto">
                    <span className="font-medium">Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center max-w-sm mx-auto">
                    <span className="font-medium">Saturday</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center max-w-sm mx-auto">
                    <span className="font-medium">Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
                <p className="text-sm text-neutral-500 dark:text-neutral-400 pt-4">
                  All times are in Japan Standard Time (JST)
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

