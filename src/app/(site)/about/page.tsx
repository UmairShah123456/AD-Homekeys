"use client";
import { motion } from "motion/react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
    viewport: { once: true, margin: "-100px" },
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="relative pt-44 pb-24 bg-white dark:bg-darkmode">
        <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <span className="text-14 uppercase tracking-wider text-primary mb-4 block">About Us</span>
              <h1 className="mb-6">Your Trusted Serviced Accommodation Partner</h1>
              <p className="text-19 text-muted dark:text-white dark:text-opacity-70 leading-relaxed">
                At AD Homekeys, we're committed to delivering exceptional serviced accommodation solutions across the UK.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-20 lg:py-24 bg-tan dark:bg-dark_b">
        <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4">
          <div className="grid grid-cols-12 lg:gap-16 gap-8 items-center">
            <motion.div {...fadeIn} className="lg:col-span-6 col-span-12">
              <span className="text-14 uppercase tracking-wider text-primary mb-4 block">Our Story</span>
              <h2 className="mb-6">Building Success Together</h2>
              <p className="text-18 text-muted dark:text-white dark:text-opacity-70 mb-6 leading-relaxed">
                AD Homekeys has established itself as a trusted name in the serviced accommodation industry, helping property owners maximize their returns while providing exceptional experiences for guests.
              </p>
              <p className="text-16 text-muted dark:text-white dark:text-opacity-70 leading-relaxed">
                Our team brings together expertise in property management, hospitality, and revenue optimization to deliver comprehensive solutions that benefit both property owners and guests.
              </p>
            </motion.div>

            <motion.div {...fadeIn} transition={{ delay: 0.2 }} className="lg:col-span-6 col-span-12">
              <div className="relative w-full aspect-square rounded-3xl overflow-hidden">
                <Image
                  src="/images/about-us.png"
                  alt="AD Homekeys About Us"
                  fill
                  className="object-cover rounded-3xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 bg-white dark:bg-darkmode">
        <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4">
          <motion.div {...fadeIn} className="text-center mb-16">
            <span className="text-14 uppercase tracking-wider text-primary mb-4 block">Our Values</span>
            <h2 className="mb-4">What Drives Us</h2>
            <p className="text-18 text-muted dark:text-white dark:text-opacity-70 max-w-2xl mx-auto">
              Our core values guide everything we do, from property management to guest services.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div {...fadeIn} className="bg-tan dark:bg-dark_b p-8 rounded-3xl">
              <Icon icon="ph:handshake" className="text-primary mb-6" width="48" height="48" />
              <h4 className="mb-4 text-midnight_text dark:text-white">Integrity</h4>
              <p className="text-16 text-muted dark:text-white dark:text-opacity-70 leading-relaxed">
                We believe in honest, transparent relationships with our property owners and guests, built on trust and mutual respect.
              </p>
            </motion.div>

            <motion.div {...fadeIn} transition={{ delay: 0.1 }} className="bg-tan dark:bg-dark_b p-8 rounded-3xl">
              <Icon icon="ph:star" className="text-primary mb-6" width="48" height="48" />
              <h4 className="mb-4 text-midnight_text dark:text-white">Excellence</h4>
              <p className="text-16 text-muted dark:text-white dark:text-opacity-70 leading-relaxed">
                We strive for excellence in every aspect of our service, from property standards to guest experiences.
              </p>
            </motion.div>

            <motion.div {...fadeIn} transition={{ delay: 0.2 }} className="bg-tan dark:bg-dark_b p-8 rounded-3xl">
              <Icon icon="ph:lightbulb" className="text-primary mb-6" width="48" height="48" />
              <h4 className="mb-4 text-midnight_text dark:text-white">Innovation</h4>
              <p className="text-16 text-muted dark:text-white dark:text-opacity-70 leading-relaxed">
                We continuously innovate to improve our services and maximize returns for property owners.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 md:py-20 lg:py-24 bg-light-green dark:bg-dark_b">
        <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4">
          <div className="grid grid-cols-12 lg:gap-16 gap-8 items-center">
            <motion.div {...fadeIn} className="lg:col-span-6 col-span-12 lg:order-2">
              <span className="text-14 uppercase tracking-wider text-white mb-4 block">Our Approach</span>
              <h2 className="mb-6 text-white">Professional Service, Personal Touch</h2>
              <p className="text-18 text-white text-opacity-90 mb-8 leading-relaxed">
                We combine professional expertise with personalized service to ensure every property and guest receives the attention they deserve.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <p className="text-16 text-white text-opacity-85">Tailored solutions for each property</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <p className="text-16 text-white text-opacity-85">Dedicated support team</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <p className="text-16 text-white text-opacity-85">Continuous improvement focus</p>
                </div>
              </div>
            </motion.div>

            <motion.div {...fadeIn} transition={{ delay: 0.2 }} className="lg:col-span-6 col-span-12 lg:order-1">
              <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-3xl overflow-hidden">
                <Image
                  src="/images/our-appraoch.png"
                  alt="AD Homekeys Our Approach"
                  fill
                  className="object-cover rounded-3xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-forest dark:bg-forest">
        <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div {...fadeIn}>
              <h2 className="mb-6 text-white">Ready to Work Together?</h2>
              <p className="text-19 text-tan mb-10 leading-relaxed">
                Whether you're a property owner looking to maximize returns or seeking quality serviced accommodation, we're here to help.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  href="/landlords"
                  className="inline-flex items-center gap-2 bg-primary text-white py-4 px-8 rounded-lg hover:bg-white hover:text-primary transition-all text-17 font-medium"
                >
                  For Property Owners
                  <Icon icon="solar:alt-arrow-right-linear" width="18" height="18" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-transparent text-white py-4 px-8 rounded-lg border-2 border-white hover:bg-white hover:text-forest transition-all text-17 font-medium"
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
