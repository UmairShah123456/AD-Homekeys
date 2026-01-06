"use client";
import { motion } from "motion/react";
import { Icon } from "@iconify/react";
import Link from "next/link";

export default function SocialHousingPage() {
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
          <div className="grid grid-cols-12 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="lg:col-span-7 col-span-12"
            >
              <span className="text-14 uppercase tracking-wider text-primary mb-4 block">For Providers</span>
              <h1 className="mb-6">Safe, Quality Accommodation When It's Needed Most</h1>
              <p className="text-19 text-muted dark:text-white dark:text-opacity-70 leading-relaxed mb-8 max-w-2xl">
                AD Homekeys provides safe, quality accommodation for individuals and families in need, working in partnership with Local Authorities across the UK.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-primary text-white py-4 px-8 rounded-lg hover:bg-secondary transition-all text-17"
              >
                Contact Us
                <Icon icon="solar:alt-arrow-right-linear" width="18" height="18" />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              className="lg:col-span-5 col-span-12"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-tan rounded-2xl p-6 text-center">
                  <div className="text-40 text-primary mb-2" style={{ fontFamily: 'var(--font-playfair)' }}>24/7</div>
                  <p className="text-14 text-muted">Support Available</p>
                </div>
                <div className="bg-light-green rounded-2xl p-6 text-center">
                  <div className="text-40 text-white mb-2" style={{ fontFamily: 'var(--font-playfair)' }}>UK</div>
                  <p className="text-14 text-white">Nationwide</p>
                </div>
                <div className="col-span-2 bg-forest rounded-2xl p-6 text-center">
                  <div className="text-40 text-primary mb-2" style={{ fontFamily: 'var(--font-playfair)' }}>100%</div>
                  <p className="text-14 text-tan">Quality Assured Properties</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Emergency Accommodation - Full Width Feature */}
      <section className="py-24 bg-forest dark:bg-forest">
        <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4">
          <div className="grid grid-cols-12 gap-16 items-center">
            <motion.div {...fadeIn} className="lg:col-span-6 col-span-12">
              <Icon icon="ph:house-line" className="text-primary mb-6" width="56" height="56" />
              <h2 className="mb-6 text-white">Emergency Accommodation</h2>
              <p className="text-18 text-white text-opacity-90 mb-8 leading-relaxed">
                Immediate housing solutions for individuals and families facing crisis situations. We provide safe, secure accommodation at short notice when it's needed most.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <p className="text-16 text-white text-opacity-85">24-hour placement availability</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <p className="text-16 text-white text-opacity-85">Safe and secure properties</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <p className="text-16 text-white text-opacity-85">Fully furnished options</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <p className="text-16 text-white text-opacity-85">Utilities included</p>
                </div>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-white hover:text-primary transition-colors text-16 font-medium group"
              >
                Learn More
                <Icon icon="solar:alt-arrow-right-linear" width="20" height="20" className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
            <motion.div {...fadeIn} transition={{ delay: 0.2 }} className="lg:col-span-6 col-span-12">
              <div className="w-full h-[400px] bg-dark-green rounded-3xl flex items-center justify-center">
                <span className="text-accent text-18">Emergency Accommodation Image</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Temporary & Supported Housing - Two Column */}
      <section className="py-24 bg-tan dark:bg-dark_b">
        <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Temporary Housing */}
            <motion.div {...fadeIn} className="bg-white dark:bg-midnight_text p-10 rounded-3xl">
              <Icon icon="ph:clock" className="text-primary mb-6" width="48" height="48" />
              <h3 className="mb-4 text-midnight_text dark:text-white">Temporary Housing</h3>
              <p className="text-16 text-muted dark:text-white dark:text-opacity-70 mb-6 leading-relaxed">
                Short to medium-term accommodation while permanent housing solutions are arranged. We work closely with Local Authorities to provide stability during transition periods.
              </p>
              <div className="pt-6 border-t border-border dark:border-dark_border">
                <p className="text-14 text-primary mb-3">Key Features</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-14 text-muted dark:text-white dark:text-opacity-70">
                    <Icon icon="ph:check" className="text-primary flex-shrink-0 mt-0.5" width="18" height="18" />
                    Flexible tenancy lengths
                  </li>
                  <li className="flex items-start gap-2 text-14 text-muted dark:text-white dark:text-opacity-70">
                    <Icon icon="ph:check" className="text-primary flex-shrink-0 mt-0.5" width="18" height="18" />
                    Well-maintained properties
                  </li>
                  <li className="flex items-start gap-2 text-14 text-muted dark:text-white dark:text-opacity-70">
                    <Icon icon="ph:check" className="text-primary flex-shrink-0 mt-0.5" width="18" height="18" />
                    Support coordination available
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Supported Accommodation */}
            <motion.div {...fadeIn} transition={{ delay: 0.1 }} className="bg-light-green dark:bg-dark_b p-10 rounded-3xl text-white">
              <Icon icon="ph:users-three" className="text-white mb-6" width="48" height="48" />
              <h3 className="mb-4 text-white dark:text-white">Supported Accommodation</h3>
              <p className="text-16 text-white text-opacity-90 dark:text-white dark:text-opacity-70 mb-6 leading-relaxed">
                Housing with additional support services to help residents maintain their tenancy and work towards independent living.
              </p>
              <div className="pt-6 border-t border-white border-opacity-20">
                <p className="text-14 text-white mb-3">Key Features</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-14 text-white text-opacity-85">
                    <Icon icon="ph:check" className="text-white flex-shrink-0 mt-0.5" width="18" height="18" />
                    On-site support available
                  </li>
                  <li className="flex items-start gap-2 text-14 text-white text-opacity-85">
                    <Icon icon="ph:check" className="text-white flex-shrink-0 mt-0.5" width="18" height="18" />
                    Life skills development
                  </li>
                  <li className="flex items-start gap-2 text-14 text-white text-opacity-85">
                    <Icon icon="ph:check" className="text-white flex-shrink-0 mt-0.5" width="18" height="18" />
                    Pathway to independence
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Working with Local Authorities */}
      <section className="py-24 bg-white dark:bg-darkmode">
        <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4">
          <div className="grid grid-cols-12 gap-16 items-center">
            <motion.div {...fadeIn} className="lg:col-span-6 col-span-12 lg:order-2">
              <span className="text-14 uppercase tracking-wider text-primary mb-4 block">Partnership Approach</span>
              <h2 className="mb-6">Working With Local Authorities</h2>
              <p className="text-18 text-muted dark:text-white dark:text-opacity-70 mb-8 leading-relaxed">
                We understand the challenges Local Authorities face in meeting housing demand. Our partnership approach is designed to provide flexible, reliable solutions that help fulfill statutory duties.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-tan dark:bg-dark_b p-6 rounded-2xl">
                  <Icon icon="ph:clock-countdown" className="text-primary mb-3" width="32" height="32" />
                  <h5 className="mb-2 text-midnight_text dark:text-white">Rapid Response</h5>
                  <p className="text-14 text-muted dark:text-white dark:text-opacity-70">
                    Quick placement turnaround
                  </p>
                </div>
                <div className="bg-tan dark:bg-dark_b p-6 rounded-2xl">
                  <Icon icon="ph:file-text" className="text-primary mb-3" width="32" height="32" />
                  <h5 className="mb-2 text-midnight_text dark:text-white">Clear Agreements</h5>
                  <p className="text-14 text-muted dark:text-white dark:text-opacity-70">
                    Transparent pricing & terms
                  </p>
                </div>
                <div className="bg-tan dark:bg-dark_b p-6 rounded-2xl">
                  <Icon icon="ph:chart-bar" className="text-primary mb-3" width="32" height="32" />
                  <h5 className="mb-2 text-midnight_text dark:text-white">Regular Reporting</h5>
                  <p className="text-14 text-muted dark:text-white dark:text-opacity-70">
                    Detailed updates provided
                  </p>
                </div>
                <div className="bg-tan dark:bg-dark_b p-6 rounded-2xl">
                  <Icon icon="ph:user-focus" className="text-primary mb-3" width="32" height="32" />
                  <h5 className="mb-2 text-midnight_text dark:text-white">Dedicated Support</h5>
                  <p className="text-14 text-muted dark:text-white dark:text-opacity-70">
                    Account management team
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div {...fadeIn} transition={{ delay: 0.2 }} className="lg:col-span-6 col-span-12 lg:order-1">
              <div className="w-full h-[500px] bg-tan rounded-3xl flex items-center justify-center relative">
                <span className="text-muted text-18">Local Authority Partnership Image</span>
                <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-primary rounded-3xl -z-10 hidden lg:block"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-forest dark:bg-forest">
        <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4">
          <div className="max-w-3xl">
            <motion.div {...fadeIn}>
              <span className="text-14 uppercase tracking-wider text-accent mb-4 block">Get In Touch</span>
              <h2 className="mb-6 text-white dark:text-white">Let's Discuss Your Housing Needs</h2>
              <p className="text-19 text-tan dark:text-tan mb-8 leading-relaxed">
                If you're a Local Authority looking for reliable housing partners, or have questions about our services, we'd love to hear from you.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-primary text-white py-4 px-8 rounded-lg hover:bg-white hover:text-primary transition-all text-17 font-medium"
                >
                  Contact Our Team
                  <Icon icon="solar:alt-arrow-right-linear" width="18" height="18" />
                </Link>
                <a
                  href="tel:+441234567890"
                  className="inline-flex items-center gap-2 bg-transparent text-white py-4 px-8 rounded-lg border-2 border-white hover:bg-white hover:text-forest transition-all text-17 font-medium"
                >
                  <Icon icon="ph:phone" width="20" height="20" />
                  Call Us
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
