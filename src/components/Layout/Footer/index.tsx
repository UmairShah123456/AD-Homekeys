import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";

const Footer = () => {
  return (
    <footer className="pt-16 pb-8 bg-forest dark:bg-forest">
      <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4">

        <div className="grid grid-cols-12 mb-12 gap-8">
          <div className="md:col-span-4 col-span-6 mb-4 md:mb-0">
            <h4 className="text-18 text-tan mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-accent text-16 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>

              <li>
                <Link href="/landlords" className="text-accent text-16 hover:text-primary transition-colors">
                  Landlords
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-accent text-16 hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4 col-span-6 mb-4 md:mb-0">
            <h4 className="text-18 text-tan mb-4">
              Services
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/social-housing" className="text-accent text-16 hover:text-primary transition-colors">
                  Emergency Accommodation
                </Link>
              </li>
              <li>
                <Link href="/social-housing" className="text-accent text-16 hover:text-primary transition-colors">
                  Temporary Housing
                </Link>
              </li>
              <li>
                <Link href="/landlords" className="text-accent text-16 hover:text-primary transition-colors">
                  Property Management
                </Link>
              </li>
              <li>
                <Link href="/landlords" className="text-accent text-16 hover:text-primary transition-colors">
                  Landlord Support
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4 col-span-12">
            <h4 className="text-18 text-tan mb-4">Contact Us</h4>
            <div className="flex flex-col gap-4">
              <div className="flex items-start text-foottext text-16">
                <Icon icon="weui:location-outlined" className="w-6 h-6 mr-3 mt-1 flex-shrink-0" />
                <div className="flex flex-col">
                  <span className="text-tan">Office Address</span>
                  <span className="text-accent mt-1">
                    128 City Road<br />
                    London<br />
                    EC1V 2NX<br />
                    United Kingdom
                  </span>
                </div>
              </div>
              <div className="flex items-start gap-2 text-foottext">
                <Icon icon="majesticons:phone-retro-line" className="w-6 h-6 flex-shrink-0 mt-1" />
                <div className="flex flex-col">
                  <span className="text-tan">Phone</span>
                  <Link href="tel:+443301338456" className="text-16 hover:text-primary transition-colors text-accent mt-1">
                    +44 330 133 8456
                  </Link>
                </div>
              </div>
              <div className="flex items-start text-foottext gap-2">
                <Icon icon="clarity:email-line" className="w-6 h-6 flex-shrink-0 mt-1" />
                <div className="flex flex-col">
                  <span className="text-tan">Email</span>
                  <Link
                    href="mailto:daniel@adhomekeys.com"
                    className="inline-flex items-center text-16 hover:text-primary transition-colors text-accent mt-1"
                  >
                    daniel@adhomekeys.com
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>



        <div className="text-center pt-8 mt-8 border-t border-dark_border">
          <p className="text-16 text-accent">
            © {new Date().getFullYear()} AD Homekeys. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
