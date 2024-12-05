import React from 'react';
import { Link } from 'react-scroll';
import EventBlock from '../components/EventBlock';
import EventSubmissionForm from '../components/EventSubmissionForm';
import eventData from '../data/EventContent.json';

type Event = {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  imageUrl: string;
  type: "current" | "featured";
};

const Events: React.FC = () => {
  const events: Event[] = eventData.events as Event[];

  return (
    <div className="pt-20">
      <div className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-8">Events</h1>
          <div className="flex justify-center space-x-6">
            <Link
              to="current-events"
              smooth={true}
              duration={500}
              className="bg-white text-blue-600 px-6 py-2 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors"
            >
              Current Events
            </Link>
            <Link
              to="featured-events"
              smooth={true}
              duration={500}
              className="bg-white text-blue-600 px-6 py-2 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors"
            >
              Featured Events
            </Link>
            <Link
              to="submit-event"
              smooth={true}
              duration={500}
              className="bg-white text-blue-600 px-6 py-2 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors"
            >
              Submit Your Event
            </Link>
          </div>
        </div>
      </div>
      <EventBlock events={events} type="current" />
      <EventBlock events={events} type="featured" />
      <EventSubmissionForm />
    </div>
  );
};

export default Events;
