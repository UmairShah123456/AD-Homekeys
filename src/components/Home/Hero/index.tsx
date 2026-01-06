"use client";
import Link from "next/link";
import { motion } from "motion/react";
import { Icon } from "@iconify/react";

const Hero = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  return (
    <section className="relative bg-[#296f53] overflow-hidden min-h-screen md:h-screen flex items-center">
      <div className="w-full h-full">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center h-full">
          {/* Left side - Content (50% width on desktop, full width on mobile) */}
          <motion.div
            {...fadeIn}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="col-span-1 px-4 sm:px-6 sm:py-16 md:px-12 xl:px-16 2xl:px-24 flex items-center w-full md:h-full"
          >
            <div className="w-full max-w-full h-full flex flex-col justify-center lg:-mt-40">
              <span className="hidden md:block text-sm uppercase tracking-wider text-white/80 mb-4">
                Premium Serviced Accommodation
              </span>

              <h1 className="mb-6 leading-tight text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                Quality Serviced Accommodation Across the UK
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-white mb-8 leading-relaxed">
                Professional serviced accommodation solutions for property owners and guests. We deliver exceptional service and guaranteed returns for landlords nationwide.
              </p>

              <div className="flex items-center flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="text-15 sm:text-17 flex gap-2 items-center bg-white text-[#4d8563] hover:bg-white/90 transition-all py-3 px-6 sm:py-4 sm:px-8 rounded-lg font-medium"
                >
                  Contact Us
                </Link>

                <Link
                  href="/landlords"
                  className="text-15 sm:text-17 flex gap-2 items-center text-white border-2 border-white hover:bg-white hover:text-[#4d8563] transition-all py-3 px-6 sm:py-4 sm:px-8 rounded-lg font-medium"
                >
                  For Landlords
                  <Icon
                    icon="solar:alt-arrow-right-linear"
                    width="18"
                    height="18"
                  />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Right side - Illustration (50% width on desktop, full width below text on mobile) */}
          <motion.div
            {...fadeIn}
            className="md:col-span-1 col-span-1 relative md:h-full h-96 mt-8 md:mt-0 px-4 sm:px-0"
          >
            <div className="relative">
              <img
                src="/images/hero-illustration.png"
                alt="Family in park with buildings in background"
                className="w-full h-96 md:h-full object-cover object-[50%_60%] rounded-3xl lg:rounded-none"
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

export default Hero;
