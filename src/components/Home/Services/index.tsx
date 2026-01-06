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
    <section className="py-24 bg-white dark:bg-darkmode">
      <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4">
        {/* Header - Left aligned */}
        <div className="max-w-2xl mb-16">
          <motion.div {...fadeIn}>
            <span className="text-14 uppercase tracking-wider text-primary mb-4 block">What We Offer</span>
            <h2 className="mb-6">Comprehensive Housing Solutions</h2>
            <p className="text-18 text-muted dark:text-white dark:text-opacity-70 leading-relaxed">
              We provide a range of housing solutions tailored to meet the needs of Local Authorities and the communities they serve.
            </p>
          </motion.div>
        </div>

        {/* Services Grid - Asymmetric */}
        <div className="grid grid-cols-12 gap-6">
          {/* Large Feature - Emergency Accommodation */}
          <motion.div
            {...fadeIn}
            className="lg:col-span-8 col-span-12 bg-forest dark:bg-forest p-10 rounded-3xl text-white relative overflow-hidden"
          >
            <div className="relative z-10">
              <Icon icon="ph:house-line" className="text-primary mb-6" width="48" height="48" />
              <h3 className="mb-4 text-white">Emergency Accommodation</h3>
              <p className="text-18 text-white text-opacity-90 mb-6 leading-relaxed max-w-xl">
                Immediate housing solutions for individuals and families facing homelessness, providing safe shelter when it's needed most.
              </p>
              <Link
                href="/social-housing"
                className="inline-flex items-center gap-2 text-white hover:text-primary transition-colors text-16 font-medium group"
              >
                Learn More
                <Icon icon="solar:alt-arrow-right-linear" width="20" height="20" className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            {/* Decorative element */}
            <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-primary rounded-full opacity-10"></div>
          </motion.div>

          {/* Smaller card - Temporary Housing */}
          <motion.div
            {...fadeIn}
            transition={{ delay: 0.1 }}
            className="lg:col-span-4 col-span-12 bg-tan dark:bg-dark_b p-8 rounded-3xl"
          >
            <Icon icon="ph:clock" className="text-primary mb-6" width="40" height="40" />
            <h4 className="mb-4 text-midnight_text dark:text-white">Temporary Housing</h4>
            <p className="text-16 text-muted dark:text-white dark:text-opacity-70 mb-6 leading-relaxed">
              Short to medium-term accommodation options while permanent solutions are arranged.
            </p>
            <Link
              href="/social-housing"
              className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors text-16 font-medium group"
            >
              Learn More
              <Icon icon="solar:alt-arrow-right-linear" width="18" height="18" className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Smaller card - Supported Living */}
          <motion.div
            {...fadeIn}
            transition={{ delay: 0.2 }}
            className="lg:col-span-4 col-span-12 bg-light-green dark:bg-dark_b p-8 rounded-3xl text-white"
          >
            <Icon icon="ph:users-three" className="text-white mb-6" width="40" height="40" />
            <h4 className="mb-4 text-white dark:text-white">Supported Living</h4>
            <p className="text-16 text-white text-opacity-90 dark:text-white dark:text-opacity-70 mb-6 leading-relaxed">
              Accommodation with additional support services to help residents maintain tenancy.
            </p>
            <Link
              href="/social-housing"
              className="inline-flex items-center gap-2 text-white hover:text-forest transition-colors text-16 font-medium group"
            >
              Learn More
              <Icon icon="solar:alt-arrow-right-linear" width="18" height="18" className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Large Feature - Landlord Partnership */}
          <motion.div
            {...fadeIn}
            transition={{ delay: 0.3 }}
            className="lg:col-span-8 col-span-12 bg-primary dark:bg-primary p-10 rounded-3xl text-white relative overflow-hidden"
          >
            <div className="relative z-10">
              <Icon icon="ph:handshake" className="text-white mb-6" width="48" height="48" />
              <h3 className="mb-4 text-white">Landlord Partnership</h3>
              <p className="text-18 text-white text-opacity-95 mb-6 leading-relaxed max-w-xl">
                Flexible partnership opportunities for property owners, with guaranteed rent and comprehensive property management.
              </p>
              <Link
                href="/landlords"
                className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-lg hover:bg-forest hover:text-white transition-all text-16 font-medium"
              >
                For Landlords
                <Icon icon="solar:alt-arrow-right-linear" width="20" height="20" />
              </Link>
            </div>
            {/* Decorative element */}
            <div className="absolute -left-12 -top-12 w-48 h-48 bg-white rounded-full opacity-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
