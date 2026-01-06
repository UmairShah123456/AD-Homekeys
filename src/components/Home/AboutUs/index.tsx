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
    <section className="py-24 bg-tan dark:bg-dark_b overflow-hidden">
      <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4">
        <div className="grid grid-cols-12 gap-16 items-center">
          <motion.div
            {...fadeIn}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="lg:col-span-5 col-span-12"
          >
            <span className="text-14 uppercase tracking-wider text-primary mb-4 block">Who We Are</span>
            <h2 className="mb-4">Supporting Communities Across the UK</h2>

            <p className="text-16 text-muted dark:text-white dark:text-opacity-80 mb-6 leading-relaxed">
              We work in partnership with Local Authorities to provide safe, well-maintained housing solutions for those experiencing homelessness or housing insecurity. Our approach combines professional property management with genuine care for our residents' wellbeing.
            </p>

            <div className="flex items-start gap-6 mb-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <Icon icon="ph:handshake" className="text-white w-6 h-6" />
                </div>
              </div>
              <div>
                <h5 className="mb-2 text-midnight_text dark:text-white">Trusted Partner</h5>
                <p className="text-16 text-muted dark:text-white dark:text-opacity-70 leading-relaxed">
                  Working with Local Authorities across the UK to deliver reliable housing solutions.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6 mb-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <Icon icon="ph:heart" className="text-white w-6 h-6" />
                </div>
              </div>
              <div>
                <h5 className="mb-2 text-midnight_text dark:text-white">People First</h5>
                <p className="text-16 text-muted dark:text-white dark:text-opacity-70 leading-relaxed">
                  Our residents' safety, dignity, and wellbeing are at the heart of everything we do.
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
                <h5 className="mb-2 text-midnight_text dark:text-white">Quality Properties</h5>
                <p className="text-16 text-muted dark:text-white dark:text-opacity-70 leading-relaxed">
                  Well-maintained, safe accommodations that meet high standards of quality and comfort.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div {...fadeIn} className="lg:col-span-7 col-span-12 relative">
            <div className="relative">
              <img
                src="/images/supporting.jpg"
                alt="Supporting Communities Across the UK"
                className="w-full h-[500px] object-cover object-[50%_60%] rounded-3xl"
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
