"use client";
import { motion } from "motion/react";
import { Icon } from "@iconify/react";

const AboutUs = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
    viewport: { once: true, margin: "-100px" },
  };

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-tan dark:bg-dark_b overflow-hidden">
      <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4">
        {/* Centered About Us Header */}
        <motion.div
          {...fadeIn}
          className="text-center mb-16"
        >
          <h2 className="mb-4">About Us</h2>
          <h3 className="text-24 text-primary mb-6 font-medium">Your Trusted Serviced Accommodation Partner</h3>
          <p className="text-18 text-muted dark:text-white dark:text-opacity-80 max-w-3xl mx-auto leading-relaxed">
            At AD Homekeys, we're committed to delivering exceptional serviced accommodation solutions across the UK.
          </p>
        </motion.div>

        <div className="grid grid-cols-12 lg:gap-16 gap-8 items-center">
          <motion.div
            {...fadeIn}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="lg:col-span-5 col-span-12"
          >
            <span className="text-14 uppercase tracking-wider text-primary mb-4 block">Who We Are</span>
            <h2 className="mb-4">Premium Serviced Accommodation Experts</h2>

            <p className="text-16 text-muted dark:text-white dark:text-opacity-80 mb-6 leading-relaxed">
              AD Homekeys specializes in providing high-quality serviced accommodation across the UK. We partner with property owners to transform their properties into profitable serviced accommodation units while delivering exceptional guest experiences.
            </p>

            <div className="flex items-start lg:gap-6 gap-4 mb-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <Icon icon="ph:handshake" className="text-white w-6 h-6" />
                </div>
              </div>
              <div>
                <h5 className="mb-2 text-midnight_text dark:text-white">Trusted Partner</h5>
                <p className="text-16 text-muted dark:text-white dark:text-opacity-70 leading-relaxed">
                  Working with property owners across the UK to maximize rental returns through serviced accommodation.
                </p>
              </div>
            </div>

            <div className="flex items-start lg:gap-6 gap-4 mb-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <Icon icon="ph:heart" className="text-white w-6 h-6" />
                </div>
              </div>
              <div>
                <h5 className="mb-2 text-midnight_text dark:text-white">Guest Excellence</h5>
                <p className="text-16 text-muted dark:text-white dark:text-opacity-70 leading-relaxed">
                  Delivering exceptional guest experiences with fully managed, high-quality serviced accommodation.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <Icon icon="ph:house" className="text-white w-6 h-6" />
                </div>
              </div>
              <div>
                <h5 className="mb-2 text-midnight_text dark:text-white">Premium Properties</h5>
                <p className="text-16 text-muted dark:text-white dark:text-opacity-70 leading-relaxed">
                  Professionally managed properties that meet the highest standards of quality and comfort.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div {...fadeIn} className="lg:col-span-7 col-span-12 relative">
            <div className="relative">
              <img
                src="/images/supporting.jpg"
                alt="Supporting Communities Across the UK"
                className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover object-[50%_60%] rounded-3xl"
              />
              {/* Decorative element */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary rounded-3xl -z-10 hidden lg:block"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
