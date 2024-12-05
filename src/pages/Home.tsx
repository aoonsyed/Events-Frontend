import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import Swiper styles
import 'swiper/css/effect-fade';
import { EffectFade } from 'swiper/modules';
import { Autoplay } from 'swiper/modules';
import About from '../components/About';
import Contact from '../components/Contact';

const Home: React.FC = () => {
  const slides = [
    { image: '/images/slide1.jpg' },
    { image: '/images/slide2.jpg' },
    { image: '/images/slide3.jpg' },
  ]; // Replace with your high-quality image paths

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative w-full h-screen">
        <Swiper
          modules={[EffectFade, Autoplay]}
          effect="fade"
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop
          className="w-full h-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index} className="relative">
              {/* Slide Image */}
              <img
                src={slide.image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
                loading="lazy" // Native HTML lazy loading
              />
            </SwiperSlide>
          ))}
        </Swiper>

       {/* Fancy Explore Events Button */}
<div className="absolute inset-0 flex items-center justify-center z-10">
  <a
    href="/events"
    className="px-8 py-3 font-semibold text-lg transition-all duration-300 transform hover:scale-105"
    style={{
      background: 'linear-gradient(45deg, #4caf50, #03a9f4)', // Vibrant gradient
      color: '#fff', // White text for contrast
      textShadow: '0px 2px 4px rgba(0, 0, 0, 0.8)', // Subtle text shadow
      borderRadius: '10px', // Slightly rounded corners
      boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.4)', // Subtle glow effect
    }}
  >
    Click to Explore Events
  </a>
</div>


        {/* Gradient Overlay for Better Contrast */}
        <div className="absolute inset-0 bg-black bg-opacity-30 z-0"></div>
      </section>

      {/* About Section */}
      <About />

      {/* Contact Section */}
      <Contact />
    </div>
  );
};

export default Home;
