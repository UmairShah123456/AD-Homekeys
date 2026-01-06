"use client";
import { motion } from "motion/react";
import { Icon } from "@iconify/react";
import Link from "next/link";

const Services = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
    viewport: { once: true, margin: "-100px" },
  };

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-white dark:bg-darkmode">
      <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4">
        {/* Header - Left aligned */}
        <div className="max-w-2xl mb-8 lg:mb-16">
          <motion.div {...fadeIn}>
            <span className="text-14 uppercase tracking-wider text-primary mb-4 block">What We Offer</span>
            <h2 className="mb-6">Serviced Accommodation Solutions</h2>
            <p className="text-18 text-muted dark:text-white dark:text-opacity-70 leading-relaxed">
              We provide comprehensive serviced accommodation management services for property owners and exceptional stays for guests.
            </p>
          </motion.div>
        </div>

        {/* Services Grid - Asymmetric */}
        <div className="grid grid-cols-12 gap-4 lg:gap-6">
          {/* Large Feature - Property Management */}
          <motion.div
            {...fadeIn}
            className="lg:col-span-8 col-span-12 bg-forest dark:bg-forest p-4 sm:p-6 lg:p-8 xl:p-10 rounded-3xl text-white relative overflow-hidden"
          >
            <div className="relative z-10">
              <Icon icon="ph:house-line" className="text-primary mb-4 sm:mb-6" width="40" height="40" />
              <h3 className="mb-3 sm:mb-4 text-white">Full Property Management</h3>
              <p className="text-16 sm:text-18 text-white text-opacity-90 mb-4 sm:mb-6 leading-relaxed">
                Complete end-to-end management of your serviced accommodation, from guest bookings to property maintenance and everything in between.
              </p>
              <Link
                href="/landlords"
                className="inline-flex items-center gap-2 text-white hover:text-primary transition-colors text-15 sm:text-16 font-medium group"
              >
                Learn More
                <Icon icon="solar:alt-arrow-right-linear" width="18" height="18" className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* Smaller card - Guest Services */}
          <motion.div
            {...fadeIn}
            transition={{ delay: 0.1 }}
            className="lg:col-span-4 col-span-12 bg-tan dark:bg-dark_b p-4 sm:p-6 lg:p-8 rounded-3xl"
          >
            <Icon icon="ph:users-three" className="text-primary mb-4 sm:mb-6" width="32" height="32" />
            <h4 className="mb-3 sm:mb-4 text-midnight_text dark:text-white">Guest Services</h4>
            <p className="text-14 sm:text-16 text-muted dark:text-white dark:text-opacity-70 mb-4 sm:mb-6 leading-relaxed">
              24/7 guest support and concierge services ensuring exceptional experiences for every stay.
              </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors text-14 sm:text-16 font-medium group"
            >
              Learn More
              <Icon icon="solar:alt-arrow-right-linear" width="16" height="16" className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Smaller card - Revenue Optimization */}
          <motion.div
            {...fadeIn}
            transition={{ delay: 0.2 }}
            className="lg:col-span-4 col-span-12 bg-light-green dark:bg-dark_b p-4 sm:p-6 lg:p-8 rounded-3xl text-white"
          >
            <Icon icon="ph:chart-line-up" className="text-white mb-4 sm:mb-6" width="32" height="32" />
            <h4 className="mb-3 sm:mb-4 text-white dark:text-white">Revenue Optimization</h4>
            <p className="text-14 sm:text-16 text-white text-opacity-90 dark:text-white dark:text-opacity-70 mb-4 sm:mb-6 leading-relaxed">
              Dynamic pricing and strategic marketing to maximize your property's earning potential.
            </p>
            <Link
              href="/landlords"
              className="inline-flex items-center gap-2 text-white hover:text-forest transition-colors text-14 sm:text-16 font-medium group"
            >
              Learn More
              <Icon icon="solar:alt-arrow-right-linear" width="16" height="16" className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Large Feature - Landlord Partnership */}
          <motion.div
            {...fadeIn}
            transition={{ delay: 0.3 }}
            className="lg:col-span-8 col-span-12 bg-primary dark:bg-primary p-4 sm:p-6 lg:p-8 xl:p-10 rounded-3xl text-white relative overflow-hidden"
          >
            <div className="relative z-10">
              <Icon icon="ph:handshake" className="text-white mb-4 sm:mb-6" width="40" height="40" />
              <h3 className="mb-3 sm:mb-4 text-white">Property Owner Partnership</h3>
              <p className="text-16 sm:text-18 text-white text-opacity-95 mb-4 sm:mb-6 leading-relaxed">
                Partner with us to transform your property into a profitable serviced accommodation business with guaranteed returns and professional management.
              </p>
              <Link
                href="/landlords"
                className="inline-flex items-center gap-2 bg-white text-primary px-5 py-2.5 sm:px-6 sm:py-3 rounded-lg hover:bg-forest hover:text-white transition-all text-14 sm:text-16 font-medium"
              >
                For Property Owners
                <Icon icon="solar:alt-arrow-right-linear" width="18" height="18" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
