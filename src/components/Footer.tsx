import React from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* MyEvents Section */}
          <div className="flex justify-start">
            <div>
              <h3 className="text-lg font-semibold mb-4">Hadi-Events</h3>
              <p className="text-gray-400">
                Connecting people through memorable events countrywide.
              </p>
            </div>
          </div>

          {/* Follow Us Section */}
          <div className="flex flex-col items-center">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-center">Follow Us</h3>
              <div className="flex justify-center space-x-4 mb-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Twitter className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
              <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Hadi-Events. All rights reserved.</p>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="flex justify-end">
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/" className="text-gray-400 hover:text-white transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-gray-400 hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="/events" className="text-gray-400 hover:text-white transition-colors">
                    Events
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
