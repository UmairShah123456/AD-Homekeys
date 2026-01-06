"use client";
import { motion } from "motion/react";
import { Icon } from "@iconify/react";
import { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    userType: "landlord",
  });

  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
    viewport: { once: true, margin: "-100px" },
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission logic here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="relative pt-44 pb-20 bg-white dark:bg-darkmode">
        <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="mb-6">Get In Touch</h1>
            <p className="text-19 text-muted dark:text-white dark:text-opacity-70 leading-relaxed">
              Whether you're a landlord interested in partnering with us or have general inquiries, we're here to help.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="py-20 bg-darkmode dark:bg-darkmode">
        <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            {/* Left side - Contact Form */}
            <motion.div {...fadeIn} className="lg:col-span-2">
              <h2 className="mb-6 text-white">Send Us a Message</h2>
              <p className="text-18 text-white text-opacity-80 mb-8 leading-relaxed">
                Fill out the form below and our team will get back to you as soon as possible. We're committed to providing prompt, helpful responses to all inquiries.
              </p>

              <form onSubmit={handleSubmit} className="bg-tan dark:bg-dark_b p-8 rounded-2xl">
                <div className="mb-6">
                  <label htmlFor="userType" className="block text-16 text-midnight_text dark:text-white mb-2 font-medium">
                    I am a *
                  </label>
                  <select
                    id="userType"
                    name="userType"
                    value={formData.userType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white dark:bg-midnight_text border border-border dark:border-dark_border rounded-lg text-midnight_text dark:text-white focus:outline-none focus:border-primary"
                  >
                    <option value="landlord">Landlord</option>
                    <option value="general">General Inquiry</option>
                  </select>
                </div>

                <div className="mb-6">
                  <label htmlFor="name" className="block text-16 text-midnight_text dark:text-white mb-2 font-medium">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 bg-white dark:bg-midnight_text border border-border dark:border-dark_border rounded-lg text-midnight_text dark:text-white placeholder:text-muted placeholder:text-opacity-50 focus:outline-none focus:border-primary"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="email" className="block text-16 text-midnight_text dark:text-white mb-2 font-medium">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 bg-white dark:bg-midnight_text border border-border dark:border-dark_border rounded-lg text-midnight_text dark:text-white placeholder:text-muted placeholder:text-opacity-50 focus:outline-none focus:border-primary"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-16 text-midnight_text dark:text-white mb-2 font-medium">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+44 (0) 123 456 7890"
                      className="w-full px-4 py-3 bg-white dark:bg-midnight_text border border-border dark:border-dark_border rounded-lg text-midnight_text dark:text-white placeholder:text-muted placeholder:text-opacity-50 focus:outline-none focus:border-primary"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="subject" className="block text-16 text-midnight_text dark:text-white mb-2 font-medium">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="What is this regarding?"
                    className="w-full px-4 py-3 bg-white dark:bg-midnight_text border border-border dark:border-dark_border rounded-lg text-midnight_text dark:text-white placeholder:text-muted placeholder:text-opacity-50 focus:outline-none focus:border-primary"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-16 text-midnight_text dark:text-white mb-2 font-medium">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    placeholder="Tell us more about your inquiry..."
                    className="w-full px-4 py-3 bg-white dark:bg-midnight_text border border-border dark:border-dark_border rounded-lg text-midnight_text dark:text-white placeholder:text-muted placeholder:text-opacity-50 focus:outline-none focus:border-primary resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-white py-4 px-8 rounded-lg hover:bg-secondary transition-all text-17 font-medium flex items-center justify-center gap-2"
                >
                  Send Message
                  <Icon icon="solar:arrow-right-linear" width="20" height="20" />
                </button>

                <p className="text-14 text-midnight_text dark:text-white text-opacity-70 mt-4 text-center">
                  * Required fields
                </p>
              </form>
            </motion.div>

            {/* Right side - Map */}
            <motion.div
              {...fadeIn}
              transition={{ delay: 0.2 }}
              className="flex flex-col lg:col-span-1"
            >
              <div className="mb-6">
                <h2 className="mb-6 text-white">Find Us</h2>
                <div className="bg-tan dark:bg-dark_b p-6 rounded-2xl mb-6 space-y-6">
                  <div className="flex items-start gap-3">
                    <Icon icon="ph:map-pin" className="text-primary w-6 h-6 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-midnight_text dark:text-white font-medium mb-1">Our Office</h4>
                      <p className="text-16 text-midnight_text dark:text-white text-opacity-80">
                        128 City Road<br />
                        London<br />
                        EC1V 2NX<br />
                        United Kingdom
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon icon="ph:phone" className="text-primary w-6 h-6 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-midnight_text dark:text-white font-medium mb-1">Phone</h4>
                      <Link href="tel:+443301338456" className="text-16 text-midnight_text dark:text-white text-opacity-80 hover:text-primary transition-colors">
                        +44 330 133 8456
                      </Link>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon icon="ph:envelope" className="text-primary w-6 h-6 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-midnight_text dark:text-white font-medium mb-1">Email</h4>
                      <Link href="mailto:daniel@adhomekeys.com" className="text-16 text-midnight_text dark:text-white text-opacity-80 hover:text-primary transition-colors">
                        daniel@adhomekeys.com
                      </Link>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon icon="ph:clock" className="text-primary w-6 h-6 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-midnight_text dark:text-white font-medium mb-1">Business Hours</h4>
                      <p className="text-16 text-midnight_text dark:text-white text-opacity-80">
                        Monday - Friday: 9:00 AM - 6:00 PM<br />
                        By appointment only
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="mb-6 text-white">Our Location</h2>
                <div className="bg-tan dark:bg-dark_b rounded-2xl overflow-hidden h-96 lg:h-[500px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.5474188091837!2d-0.08817668422941966!3d51.52776717963814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b5a8c4b4c9b%3A0x7c5b5b5b5b5b5b!2s128%20City%20Road%2C%20London%20EC1V%202NX%2C%20United%20Kingdom!5e0!3m2!1sen!2s!4v1703123456789!5m2!1sen!2s"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="AD Homekeys Office Location"
                  ></iframe>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Information Section */}
      <section className="py-20 bg-tan dark:bg-dark_b">
        <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4">
          <div className="text-center mb-12">
            <h2 className="mb-6">How Can We Help?</h2>
            <p className="text-18 text-muted dark:text-white dark:text-opacity-70 max-w-3xl mx-auto">
              Whether you're a landlord or have general inquiries, we're here to support your housing needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              {...fadeIn}
              className="text-center"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-white dark:bg-midnight_text rounded-lg flex items-center justify-center">
                  <Icon icon="ph:users-three" className="text-primary" width="24" height="24" />
                </div>
                <div className="text-left">
                  <h4 className="mb-3 text-midnight_text dark:text-white">For Landlords</h4>
                  <p className="text-16 text-muted dark:text-white dark:text-opacity-70 leading-relaxed">
                    Interested in partnering with us? We'll discuss how we can work together and the benefits of our guaranteed rent scheme.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              {...fadeIn}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-white dark:bg-midnight_text rounded-lg flex items-center justify-center">
                  <Icon icon="ph:buildings" className="text-primary" width="24" height="24" />
                </div>
                <div className="text-left">
                  <h4 className="mb-3 text-midnight_text dark:text-white">For Local Authorities</h4>
                  <p className="text-16 text-muted dark:text-white dark:text-opacity-70 leading-relaxed">
                    Looking for reliable housing solutions? Let's discuss how we can support your accommodation needs.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              {...fadeIn}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-white dark:bg-midnight_text rounded-lg flex items-center justify-center">
                  <Icon icon="ph:question" className="text-primary" width="24" height="24" />
                </div>
                <div className="text-left">
                  <h4 className="mb-3 text-midnight_text dark:text-white">General Inquiries</h4>
                  <p className="text-16 text-muted dark:text-white dark:text-opacity-70 leading-relaxed">
                    Have questions about our services or want to learn more? We're happy to help with any questions you may have.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white dark:bg-darkmode">
        <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4">
          <motion.div {...fadeIn}>
            <h2 className="mb-12 text-center">Frequently Asked Questions</h2>

            <div className="space-y-4">
              {[
                {
                  question: "How does the guaranteed rent scheme work?",
                  answer: "Our guaranteed rent scheme ensures landlords receive their rent payments on time, every time. We take on the financial responsibility for rent collection, eliminating the risk of late or missed payments for property owners."
                },
                {
                  question: "What types of properties do you work with?",
                  answer: "We work with all types of residential properties including houses, flats, apartments, and studio spaces. Our services are particularly valuable for landlords looking to provide emergency and temporary accommodation solutions."
                },
                {
                  question: "How quickly can you place tenants?",
                  answer: "For emergency situations, we can arrange accommodation within hours. For standard placements, we typically complete the process within 24-48 hours, depending on property availability and tenant requirements."
                },
                {
                  question: "Do you provide property management services?",
                  answer: "Yes, we offer comprehensive property management services including maintenance coordination, tenant support, compliance management, and regular property inspections to ensure your investment is well-maintained."
                },
                {
                  question: "What areas do you serve?",
                  answer: "We work closely with Local Authorities across the UK, with particular focus on areas experiencing housing shortages. Our services are available nationwide, with dedicated teams in major cities and regions."
                },
                {
                  question: "How do I get started as a landlord?",
                  answer: "Simply contact us through the form above or give us a call. We'll arrange a no-obligation consultation to discuss your property, understand your goals, and explain how our services can benefit you and your tenants."
                }
              ].map((faq, index) => (
                <div key={index} className="border border-border dark:border-dark_border rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 dark:hover:bg-dark_b transition-colors"
                  >
                    <h3 className="text-20 text-midnight_text dark:text-white pr-4">
                      {faq.question}
                    </h3>
                    <motion.div
                      animate={{ rotate: openFAQ === index ? 180 : 0 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                    >
                      <Icon
                        icon="ph:caret-down"
                        className="text-midnight_text dark:text-white w-5 h-5 flex-shrink-0"
                      />
                    </motion.div>
                  </button>

                  <motion.div
                    initial={false}
                    animate={{
                      height: openFAQ === index ? "auto" : 0,
                      opacity: openFAQ === index ? 1 : 0
                    }}
                    transition={{
                      duration: 0.3,
                      ease: "easeInOut",
                      opacity: { duration: 0.2 }
                    }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <p className="text-17 text-muted dark:text-white dark:text-opacity-70 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
