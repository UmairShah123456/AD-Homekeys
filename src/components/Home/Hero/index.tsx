"use client";
import Image from "next/image";
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
            className="col-span-1 px-6 py-16 md:px-12 xl:px-16 2xl:px-24 flex items-center"
          >
            <div>
              <span className="text-sm uppercase tracking-wider text-white/80 mb-4 block">
                Supporting Communities Nationwide
              </span>

              <h1 className="mb-6 leading-tight text-white text-4xl md:text-5xl lg:text-6xl">
                We Provide Housing Solutions<br />
                <span className="text-white/90">for Critical Housing Needs</span>
              </h1>

              <p className="text-xl text-white mb-6 leading-relaxed max-w-lg">
                Trusted housing solutions for those who need it most. We partner with Local Authorities across the UK to deliver compassionate, professional support.
              </p>

              <p className="text-lg text-white/90 mb-8 leading-relaxed max-w-lg">
                From emergency accommodation to long-term supported living, we're dedicated to making a meaningful difference in the lives of vulnerable individuals and families.
              </p>

              <div className="flex items-center flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="text-17 flex gap-2 items-center bg-white text-[#4d8563] hover:bg-white/90 transition-all py-4 px-8 rounded-lg font-medium"
                >
                  Contact Us

                </Link>

                <Link
                  href="/landlords"
                  className="text-17 flex gap-2 items-center text-white border-2 border-white hover:bg-white hover:text-[#4d8563] transition-all py-4 px-8 rounded-lg font-medium"
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

          {/* Right side - Illustration (50% width) - Hidden on mobile */}
          <motion.div
            {...fadeIn}
            className="hidden md:block col-span-1 relative h-full"
          >
            <div className="relative w-full h-full">
              <Image
                src="/images/hero-illustration.jpg"
                alt="Family in park with buildings in background"
                fill
                className="object-cover"
                priority
                quality={100}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
