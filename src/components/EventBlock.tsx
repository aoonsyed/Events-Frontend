import React from 'react';
import { Event } from '../types/Event';

interface EventBlockProps {
  events: Event[];
  type: 'current' | 'featured';
}

const EventBlock: React.FC<EventBlockProps> = ({ events, type }) => {
  const filteredEvents = events.filter((event) => event.type === type);

  return (
    <section id={`${type}-events`} className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          {type === 'current' ? 'Current Events' : 'Featured Events'}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col items-center text-center transform hover:scale-105 transition-transform duration-300"
            >
              <img
                src={event.imageUrl}
                alt={event.title}
                className="w-full h-48 object-cover mb-4"
              />
              <div className="p-6 flex flex-col justify-center">
                <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                <p className="text-gray-600 mb-4">{event.description}</p>
                <div className="text-gray-500 text-sm flex flex-col space-y-2">
                  <span>{event.date}</span>
                  <span>{event.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventBlock;
