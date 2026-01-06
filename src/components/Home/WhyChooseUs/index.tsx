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
      description: "Quick turnaround times for placement requests, ensuring vulnerable individuals get housed promptly.",
    },
    {
      icon: "ph:map-pin",
      title: "Nationwide Coverage",
      description: "Properties available across the UK, allowing us to serve Local Authorities in multiple regions.",
    },
    {
      icon: "ph:shield-check",
      title: "Fully Compliant",
      description: "All properties meet required safety standards and regulations, with regular inspections and maintenance.",
    },
    {
      icon: "ph:phone",
      title: "24/7 Support",
      description: "Round-the-clock emergency support for both Local Authorities and residents when urgent issues arise.",
    },
    {
      icon: "ph:chart-line-up",
      title: "Proven Track Record",
      description: "Established reputation for reliability, quality service delivery, and positive outcomes for residents.",
    },
    {
      icon: "ph:handshake",
      title: "Transparent Partnership",
      description: "Clear communication, detailed reporting, and collaborative working relationships with all stakeholders.",
    },
  ];

  return (
    <section className="py-24 bg-light-green dark:bg-dark_b relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full opacity-5 -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-forest rounded-full opacity-5 translate-y-1/2 -translate-x-1/2"></div>

      <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4 relative z-10">
        <div className="grid grid-cols-12 gap-16">
          {/* Left side - Text content */}
          <div className="lg:col-span-5 col-span-12">
            <motion.div {...fadeIn}>
              <span className="text-14 uppercase tracking-wider text-white mb-4 block">Our Commitment</span>
              <h2 className="mb-6 text-white dark:text-white">Why Choose AD Homekeys</h2>
              <p className="text-18 text-white text-opacity-90 dark:text-white dark:text-opacity-70 leading-relaxed mb-8">
                We combine professional expertise with genuine care to deliver exceptional housing solutions for Local Authorities and their communities.
              </p>
              <p className="text-16 text-white text-opacity-85 dark:text-white dark:text-opacity-70 leading-relaxed">
                Our approach is built on trust, transparency, and a deep commitment to supporting vulnerable individuals. We don't just provide housing—we create pathways to stability and independence.
              </p>
            </motion.div>
          </div>

          {/* Right side - Benefits list */}
          <div className="lg:col-span-7 col-span-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  {...fadeIn}
                  transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
                  className="group"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                        <Icon icon={benefit.icon} className="text-white" width="24" height="24" />
                      </div>
                    </div>
                    <div>
                      <h5 className="mb-2 text-white dark:text-white">{benefit.title}</h5>
                      <p className="text-16 text-white text-opacity-85 dark:text-white dark:text-opacity-70 leading-relaxed">
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
