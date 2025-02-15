import React from 'react';

export default function Hero() {
  return (
    <section 
      className="relative w-full bg-gray-800 text-white py-16 px-6 md:px-12 lg:px-20 flex items-center bg-cover bg-center"
      style={{ backgroundImage: "url('https://media.istockphoto.com/id/454184549/photo/soybean-field.jpg?s=612x612&w=0&k=20&c=pRJJFvHnsjnEfkQRW5s-hKS-PGtYfdcrh7mWzQWdvM0=')" }}
    >
      <div className="container mx-auto flex flex-col lg:flex-row items-stretch gap-2 h-full">
        {/* Left Side - Image */}
        <div className="lg:w-1/2 flex justify-center lg:justify-start h-full">
          <img 
            src="https://i.pinimg.com/originals/41/e2/86/41e286338619a5c5e57757f74f5ce7e9.jpg" 
            alt="Farmer" 
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Right Side - Text with Background */}
        <div className="lg:w-1/2 text-left p-8 bg-gray-900 bg-opacity-80 rounded-lg flex flex-col justify-center h-full min-h-full">
          <h1 className="text-3xl md:text-4xl font-bold leading-tight">
            The Hidden Crisis: Understanding Farmer Suicides in India
          </h1>
          <p className="mt-4 text-md md:text-lg text-gray-300">
            India’s farmers feed over a billion people, yet many struggle to sustain themselves. Debt, climate uncertainty, and economic hardships push thousands to take their own lives each year. Despite their hard work, they remain marginalized, with limited access to resources, fair prices, and support systems.
          </p>
          <p className="mt-3 text-md md:text-lg text-gray-300">
            The cycle of debt, lack of institutional support, and crop failures leave farmers in an endless struggle, making it difficult to break free from financial distress.
          </p>
          <p className="mt-3 text-md md:text-lg text-gray-300">
            This analysis dives deep into decades of suicide data across Indian states, revealing trends, regional disparities, and socio-economic factors influencing these tragedies.
          </p>
          <p className="mt-3 text-md md:text-lg text-gray-300">
            Our goal is to bring clarity to the numbers, humanize the statistics, and provide <span className="font-bold">actionable insights</span> that can drive policy changes and support systems for those who need them the most.
          </p>
          <p className="mt-3 italic text-md md:text-lg text-gray-400">
            Behind every data point is a life, a family, and a story that deserves to be heard.
          </p>
        </div>
      </div>
    </section>
  );
}
