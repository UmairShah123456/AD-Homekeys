"use client";
import { motion } from "motion/react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { useState } from "react";

export default function LandlordsPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
    viewport: { once: true, margin: "-100px" },
  };

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="relative pt-44 pb-24 bg-primary dark:bg-primary overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full opacity-5 -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-forest rounded-full opacity-10 translate-y-1/2 -translate-x-1/2"></div>

        <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <span className="text-14 uppercase tracking-wider text-white mb-4 block">For Landlords</span>
              <h1 className="mb-6 text-white">Partner With AD Homekeys</h1>
              <p className="text-19 text-white text-opacity-90 leading-relaxed mb-8">
                Join our network of landlords providing quality accommodation to those who need it most. Enjoy guaranteed rent, professional management, and the satisfaction of making a social impact.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-white text-primary py-4 px-8 rounded-lg hover:bg-forest hover:text-white transition-all text-17 font-medium"
                >
                  Get Started Today
                  <Icon icon="solar:alt-arrow-right-linear" width="18" height="18" />
                </Link>
                <a
                  href="tel:+441234567890"
                  className="inline-flex items-center gap-2 bg-transparent text-white py-4 px-8 rounded-lg border-2 border-white hover:bg-white hover:text-primary transition-all text-17 font-medium"
                >
                  <Icon icon="ph:phone" width="20" height="20" />
                  Call Us
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Benefits - Asymmetric Grid */}
      <section className="py-24 bg-white dark:bg-darkmode">
        <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4">
          <div className="mb-16">
            <motion.div {...fadeIn} className="max-w-2xl">
              <span className="text-14 uppercase tracking-wider text-primary mb-4 block">Partnership Benefits</span>
              <h2 className="mb-6">Why Partner With Us</h2>
              <p className="text-18 text-muted dark:text-white dark:text-opacity-70 leading-relaxed">
                We offer landlords a hassle-free, rewarding partnership that combines financial security with social responsibility.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-12 gap-6">
            {/* Large feature - Guaranteed Rent */}
            <motion.div {...fadeIn} className="lg:col-span-7 col-span-12 bg-forest p-10 rounded-3xl text-white relative overflow-hidden">
              <div className="relative z-10">
                <Icon icon="ph:currency-gbp" className="text-primary mb-6" width="56" height="56" />
                <h3 className="mb-4 text-white">Guaranteed Rental Income</h3>
                <p className="text-18 text-white text-opacity-90 mb-6 leading-relaxed max-w-xl">
                  Receive consistent, reliable rental payments directly from us, regardless of occupancy. No more chasing tenants for rent or dealing with payment delays.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-white bg-opacity-20 rounded-lg text-14 text-forest font-medium">Consistent Income</span>
                  <span className="px-4 py-2 bg-white bg-opacity-20 rounded-lg text-14 text-forest font-medium">Direct Payments</span>
                  <span className="px-4 py-2 bg-white bg-opacity-20 rounded-lg text-14 text-forest font-medium">No Delays</span>
                </div>
              </div>
              <div className="absolute -right-16 -bottom-16 w-64 h-64 bg-primary rounded-full opacity-10"></div>
            </motion.div>

            {/* Smaller cards */}
            <motion.div {...fadeIn} transition={{ delay: 0.1 }} className="lg:col-span-5 col-span-12 space-y-6">
              <div className="bg-tan p-8 rounded-3xl">
                <Icon icon="ph:wrench" className="text-primary mb-4" width="40" height="40" />
                <h4 className="mb-3 text-midnight_text dark:text-white">Professional Management</h4>
                <p className="text-16 text-muted dark:text-white dark:text-opacity-70 leading-relaxed">
                  We handle all day-to-day management including tenant relations, maintenance, and inspections.
                </p>
              </div>
              <div className="bg-light-green p-8 rounded-3xl">
                <Icon icon="ph:heart" className="text-white mb-4" width="40" height="40" />
                <h4 className="mb-3 text-white">Social Impact</h4>
                <p className="text-16 text-white text-opacity-90 leading-relaxed">
                  Make a meaningful contribution by providing safe housing for vulnerable families.
                </p>
              </div>
            </motion.div>

            {/* Additional benefits */}
            <motion.div {...fadeIn} transition={{ delay: 0.2 }} className="lg:col-span-4 col-span-12 bg-tan p-8 rounded-3xl">
              <Icon icon="ph:shield-check" className="text-primary mb-4" width="40" height="40" />
              <h4 className="mb-3 text-midnight_text dark:text-white">Full Compliance</h4>
              <p className="text-16 text-muted dark:text-white dark:text-opacity-70 leading-relaxed">
                We ensure all properties meet required safety standards and regulations.
              </p>
            </motion.div>

            <motion.div {...fadeIn} transition={{ delay: 0.3 }} className="lg:col-span-8 col-span-12 bg-primary p-10 rounded-3xl text-white">
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <Icon icon="ph:handshake" className="text-white mb-4" width="48" height="48" />
                  <h4 className="mb-3 text-white">Long-Term Partnerships</h4>
                  <p className="text-16 text-white text-opacity-90 leading-relaxed">
                    Build a stable relationship with a reliable partner committed to treating your property with respect.
                  </p>
                </div>
                <div>
                  <Icon icon="ph:file-text" className="text-white mb-4" width="48" height="48" />
                  <h4 className="mb-3 text-white">Transparent Terms</h4>
                  <p className="text-16 text-white text-opacity-90 leading-relaxed">
                    Clear agreements, detailed reporting, and open communication throughout our partnership.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works - Timeline Style */}
      <section className="py-24 bg-tan dark:bg-dark_b">
        <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4">
          <motion.div {...fadeIn} className="text-center mb-16">
            <span className="text-14 uppercase tracking-wider text-primary mb-4 block">Simple Process</span>
            <h2 className="mb-4">How It Works</h2>
            <p className="text-18 text-muted dark:text-white dark:text-opacity-70 max-w-2xl mx-auto">
              Our straightforward process makes it easy to get started.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-8">
            {[
              {
                step: "01",
                title: "Initial Consultation",
                description: "Contact us to discuss your property. We'll assess suitability and answer any questions about our partnership model."
              },
              {
                step: "02",
                title: "Property Assessment",
                description: "We conduct a thorough inspection to ensure it meets our quality standards and identify any necessary improvements."
              },
              {
                step: "03",
                title: "Agreement Setup",
                description: "We establish a clear, transparent agreement outlining rental terms, responsibilities, and expectations."
              },
              {
                step: "04",
                title: "Property Preparation",
                description: "If needed, we assist with property preparation including furniture, utilities, and safety compliance."
              },
              {
                step: "05",
                title: "Ongoing Management",
                description: "Once occupied, we handle everything from tenant support to maintenance with regular updates."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                {...fadeIn}
                transition={{ delay: index * 0.1 }}
                className="flex gap-8 items-start group"
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-white text-24 group-hover:scale-110 transition-transform">
                    {item.step}
                  </div>
                </div>
                <div className="flex-1 pt-2">
                  <h4 className="mb-3 text-midnight_text dark:text-white">{item.title}</h4>
                  <p className="text-16 text-muted dark:text-white dark:text-opacity-70 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24 bg-white dark:bg-darkmode">
        <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4">
          <div className="grid grid-cols-12 gap-16 items-center">
            <motion.div {...fadeIn} className="lg:col-span-5 col-span-12">
              <div className="w-full h-[450px] bg-light-green rounded-3xl flex items-center justify-center relative">
                <span className="text-white text-18">Landlord Partnership Image</span>
                <div className="absolute -top-8 -right-8 w-32 h-32 bg-tan rounded-3xl -z-10 hidden lg:block"></div>
              </div>
            </motion.div>

            <motion.div {...fadeIn} transition={{ delay: 0.2 }} className="lg:col-span-7 col-span-12">
              <span className="text-14 uppercase tracking-wider text-primary mb-4 block">Landlord Feedback</span>
              <h2 className="mb-8">Trusted by Property Owners Across the UK</h2>

              <div className="bg-tan dark:bg-dark_b p-8 rounded-2xl mb-8">
                <div className="flex items-center gap-2 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} icon="ph:star-fill" className="text-primary" width="20" height="20" />
                  ))}
                </div>
                <p className="text-18 text-midnight_text dark:text-white mb-6 leading-relaxed">
                  "Working with AD Homekeys has been a stress-free experience. The guaranteed rent gives me peace of mind, and they truly care for my property as if it were their own."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white">
                    JD
                  </div>
                  <div>
                    <p className="text-16 text-midnight_text dark:text-white">Property Owner</p>
                    <p className="text-14 text-muted">Manchester</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-6">
                <div>
                  <div className="text-32 text-primary mb-2" style={{ fontFamily: 'var(--font-playfair)' }}>100%</div>
                  <p className="text-14 text-muted dark:text-white dark:text-opacity-70">Satisfaction Rate</p>
                </div>
                <div>
                  <div className="text-32 text-primary mb-2" style={{ fontFamily: 'var(--font-playfair)' }}>£0</div>
                  <p className="text-14 text-muted dark:text-white dark:text-opacity-70">Setup Fees</p>
                </div>
                <div>
                  <div className="text-32 text-primary mb-2" style={{ fontFamily: 'var(--font-playfair)' }}>24/7</div>
                  <p className="text-14 text-muted dark:text-white dark:text-opacity-70">Support</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-light-green dark:bg-dark_b">
        <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4">
          <motion.div {...fadeIn} className="max-w-2xl mb-16">
            <span className="text-14 uppercase tracking-wider text-white mb-4 block">Common Questions</span>
            <h2 className="mb-6 text-white">Frequently Asked Questions</h2>
            <p className="text-18 text-white text-opacity-90 leading-relaxed">
              Get answers to common questions about partnering with AD Homekeys.
            </p>
          </motion.div>

          <div className="space-y-4">
            {[
              {
                question: "What is the minimum tenancy length?",
                answer: "We typically work with flexible tenancy agreements ranging from 6 months to several years, depending on your preferences and Local Authority requirements."
              },
              {
                question: "How do you determine rental rates?",
                answer: "Rental rates are based on Local Housing Allowance rates, property condition, location, and market comparisons. We ensure fair, competitive rates for landlords."
              },
              {
                question: "Do you accept properties that need refurbishment?",
                answer: "We assess each property individually. In some cases, we can work with landlords to bring properties up to required standards before occupancy."
              },
              {
                question: "What happens if there's damage to my property?",
                answer: "We conduct regular property inspections and handle any necessary repairs promptly. Our agreements clearly outline responsibilities for property maintenance and damage."
              }
            ].map((faq, index) => (
              <div key={index} className="border border-white border-opacity-20 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-forest/70 hover:bg-opacity-10 transition-colors"
                >
                  <h3 className="text-20 text-white pr-4">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openFAQ === index ? 180 : 0 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                  >
                    <Icon
                      icon="ph:caret-down"
                      className="text-white w-5 h-5 flex-shrink-0"
                    />
                  </motion.div>
                </button>

                <motion.div
                  initial={false}
                  animate={{
                    height: openFAQ === index ? "auto" : 0,
                    opacity: openFAQ === index ? 1 : 0
                  }}
                  transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                    opacity: { duration: 0.2 }
                  }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6">
                    <p className="text-17 text-white text-opacity-90 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-forest dark:bg-forest">
        <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div {...fadeIn}>
              <h2 className="mb-6 text-white">Ready to Get Started?</h2>
              <p className="text-19 text-tan mb-10 leading-relaxed">
                Join our network of satisfied landlords and start benefiting from guaranteed rent, professional management, and the opportunity to make a real difference.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-primary text-white py-4 px-8 rounded-lg hover:bg-white hover:text-primary transition-all text-17 font-medium"
                >
                  Contact Us Today
                  <Icon icon="solar:alt-arrow-right-linear" width="18" height="18" />
                </Link>
                <a
                  href="tel:+441234567890"
                  className="inline-flex items-center gap-2 bg-transparent text-white py-4 px-8 rounded-lg border-2 border-white hover:bg-white hover:text-forest transition-all text-17 font-medium"
                >
                  <Icon icon="ph:phone" width="20" height="20" />
                  Call +44 (0) 123 456 7890
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
