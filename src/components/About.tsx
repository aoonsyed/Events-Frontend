import React from 'react';
import { Users, Calendar } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">About Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Calendar className="w-12 h-12 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Event Management</h3>
            <p className="text-gray-600">
              Discover and manage events from around the country with our comprehensive platform.
            </p>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Users className="w-12 h-12 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Community Driven</h3>
            <p className="text-gray-600">
              Join our growing community of event organizers and enthusiasts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
