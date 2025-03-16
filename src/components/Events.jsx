import React from 'react';
import memeimg from "../assets/memecomp.jpg";

const events = [
  {
    title: 'Meme Competition',
    description: 'Show off your meme-making skills and win exciting prizes!',
    date: '13 March - 03 April, 2025',
    image: memeimg,
    link: 'https://discordapp.com/channels/1032229669531045950/1348357254948192370'
  },
  {
    title: 'Coding Challenge',
    description: 'Compete with the best coders and solve real-world problems.',
    date: 'Coming Soon',
    image: memeimg,
    link: 'https://example.com/coding-challenge'
  },
  {
    title: 'AI Workshop',
    description: 'Learn about the latest trends in AI and ML from industry experts.',
    date: 'Coming Soon',
    image: memeimg,
    link: 'https://example.com/ai-workshop'
  }
];

const Events = () => {
  return (
    <div className='p-6 min-h-screen flex flex-col items-center'>
      <h1 className='text-center text-4xl font-bold mb-8'>Hacknovate Events</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl'>
        {events.map((event, index) => (
          <a 
            key={index} 
            href={event.link} 
            target='_blank' 
            rel='noopener noreferrer' 
            className='block p-4 rounded-2xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl cursor-pointer w-full max-w-lg mx-auto'
            style={{ backgroundColor: '#B0AFAF' }}>
            <div className='w-full h-[450px] flex justify-center items-center'>
              <img src={event.image} alt={event.title} className='max-h-full max-w-full object-contain rounded-lg' />
            </div>
            <h2 className='text-xl font-semibold mt-4'>{event.title}</h2>
            <p className='text-gray-600 mt-2'>{event.description}</p>
            <p className='text-gray-500 mt-2'><strong>Date:</strong> {event.date}</p>
            {event.title === 'Meme Competition' && (
              <button className='bg-green-500 text-white px-3 py-1 rounded-lg flex items-center mt-2'>
                LIVE
                <span className='w-3 h-3 bg-red-600 rounded-full ml-2'></span>
              </button>
            )}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Events;