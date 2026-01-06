"use client";
import { motion } from "motion/react";
import { Icon } from "@iconify/react";

const WhyChooseUs = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
    viewport: { once: true, margin: "-100px" },
  };

  const benefits = [
    {
      icon: "ph:clock-countdown",
      title: "Rapid Response",
      description: "Quick setup and onboarding for property owners, with fast turnaround on guest bookings and inquiries.",
    },
    {
      icon: "ph:map-pin",
      title: "Nationwide Coverage",
      description: "Properties available across prime UK locations, maximizing occupancy and guest appeal.",
    },
    {
      icon: "ph:shield-check",
      title: "Fully Compliant",
      description: "All properties meet safety standards and local regulations, with regular inspections and maintenance.",
    },
    {
      icon: "ph:phone",
      title: "24/7 Support",
      description: "Round-the-clock support for both property owners and guests ensuring smooth operations.",
    },
    {
      icon: "ph:chart-line-up",
      title: "Proven Track Record",
      description: "Established reputation for maximizing returns, quality service delivery, and exceptional guest satisfaction.",
    },
    {
      icon: "ph:handshake",
      title: "Transparent Partnership",
      description: "Clear communication, detailed financial reporting, and collaborative relationships with property owners.",
    },
  ];

  return (
    <section className="py-24 bg-light-green dark:bg-dark_b relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full opacity-5 -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-forest rounded-full opacity-5 translate-y-1/2 -translate-x-1/2"></div>

      <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4 relative z-10">
        <div className="grid grid-cols-12 gap-8 lg:gap-16">
          {/* Left side - Text content */}
          <div className="lg:col-span-5 col-span-12">
            <motion.div {...fadeIn}>
              <span className="text-13 sm:text-14 uppercase tracking-wider text-white mb-3 sm:mb-4 block">Our Commitment</span>
              <h2 className="mb-4 sm:mb-6 text-white dark:text-white">Why Choose AD Homekeys</h2>
              <p className="text-base sm:text-16 md:text-18 text-white text-opacity-90 dark:text-white dark:text-opacity-70 leading-relaxed mb-6 sm:mb-8">
                We combine professional expertise with industry-leading technology to deliver exceptional serviced accommodation management and maximize returns for property owners.
              </p>
              <p className="text-14 sm:text-15 md:text-16 text-white text-opacity-85 dark:text-white dark:text-opacity-70 leading-relaxed">
                Our approach is built on trust, transparency, and a commitment to excellence. We don't just manage properties—we create profitable serviced accommodation businesses that deliver outstanding guest experiences.
              </p>
            </motion.div>
          </div>

          {/* Right side - Benefits list */}
          <div className="lg:col-span-7 col-span-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  {...fadeIn}
                  transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
                  className="group"
                >
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary rounded-xl flex items-center justify-center">
                        <Icon icon={benefit.icon} className="text-white" width="20" height="20" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h5 className="mb-1.5 sm:mb-2 text-white dark:text-white text-base sm:text-lg">{benefit.title}</h5>
                      <p className="text-13 sm:text-14 md:text-16 text-white text-opacity-85 dark:text-white dark:text-opacity-70 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
