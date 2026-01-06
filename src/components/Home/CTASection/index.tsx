"use client";
import { motion } from "motion/react";
import { Icon } from "@iconify/react";
import Link from "next/link";

const CTASection = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
    viewport: { once: true, margin: "-100px" },
  };

  return (
    <section className="py-24 bg-forest dark:bg-forest relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary rounded-full opacity-10 -translate-y-1/2 -translate-x-1/2"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary rounded-full opacity-10 translate-y-1/2 translate-x-1/2"></div>

      <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4 relative z-10">
        <div className="grid grid-cols-12 gap-12 items-center">
          {/* Left side - Main CTA */}
          <motion.div {...fadeIn} className="lg:col-span-7 col-span-12">
            <span className="text-14 uppercase tracking-wider text-accent mb-4 block">For Property Owners</span>
            <h2 className="mb-6 text-white dark:text-white">Partner With Us & Make a Difference</h2>
            <p className="text-19 text-tan dark:text-tan mb-8 leading-relaxed">
              Join our network of landlords providing quality homes to those who need them most. Benefit from guaranteed rent, professional property management, and the satisfaction of making a real social impact.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <Link
                href="/landlords"
                className="inline-flex items-center gap-2 bg-primary text-white py-4 px-8 rounded-lg hover:bg-white hover:text-primary transition-all text-17 font-medium"
              >
                Learn More for Landlords
                <Icon icon="solar:alt-arrow-right-linear" width="18" height="18" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-transparent text-white py-4 px-8 rounded-lg border-2 border-white hover:bg-white hover:text-forest transition-all text-17 font-medium"
              >
                Get In Touch
              </Link>
            </div>
          </motion.div>

          {/* Right side - Benefits cards */}
          <motion.div
            {...fadeIn}
            transition={{ delay: 0.2 }}
            className="lg:col-span-5 col-span-12 space-y-4"
          >
            <div className="bg-dark-green bg-opacity-50 backdrop-blur-sm p-6 rounded-2xl border border-white border-opacity-10">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <Icon icon="ph:currency-gbp" className="text-white" width="20" height="20" />
                </div>
                <div>
                  <h5 className="mb-2 text-white dark:text-white">Guaranteed Rent</h5>
                  <p className="text-14 text-accent dark:text-accent leading-relaxed">
                    Consistent rental income paid directly to you, regardless of occupancy.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-dark-green bg-opacity-50 backdrop-blur-sm p-6 rounded-2xl border border-white border-opacity-10">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <Icon icon="ph:wrench" className="text-white" width="20" height="20" />
                </div>
                <div>
                  <h5 className="mb-2 text-white dark:text-white">Full Management</h5>
                  <p className="text-14 text-accent dark:text-accent leading-relaxed">
                    We handle all property management and tenant relations for you.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-dark-green bg-opacity-50 backdrop-blur-sm p-6 rounded-2xl border border-white border-opacity-10">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <Icon icon="ph:heart" className="text-white" width="20" height="20" />
                </div>
                <div>
                  <h5 className="mb-2 text-white dark:text-white">Social Impact</h5>
                  <p className="text-14 text-accent dark:text-accent leading-relaxed">
                    Make a meaningful difference in your community while earning returns.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
