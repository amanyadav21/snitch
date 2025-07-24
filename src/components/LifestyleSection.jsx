import React from 'react';

const LifestyleSection = () => {
  const lifestyleImages = [
    {
      id: 1,
      src: 'https://res.cloudinary.com/dqso1oxdt/image/upload/v1753343840/download_da2kxx.jpg',
      alt: 'Everyday Style 1',
    },
    {
      id: 2,
      src: 'https://res.cloudinary.com/dqso1oxdt/image/upload/v1753343841/download_2_itnhvj.jpg',
      alt: 'Everyday Style 2',
    },
    {
      id: 3,
      src: 'https://res.cloudinary.com/dqso1oxdt/image/upload/v1753343842/download_1_ekqwsl.jpg',
      alt: 'Everyday Style 3',
    },
    {
      id: 4,
      src: 'https://res.cloudinary.com/dqso1oxdt/image/upload/v1753343838/Masculinity_Quotes__Empowering_Words_For_The_Modern_Man_7_c1ymwi.jpg',
      alt: 'Modern Man Style',
    },
    {
      id: 5,
      src: 'https://res.cloudinary.com/dqso1oxdt/image/upload/v1753343837/download_3_rp7qum.jpg',
      alt: 'Everyday Style 4',
    },
    {
      id: 6,
      src: 'https://res.cloudinary.com/dqso1oxdt/image/upload/v1753343836/men_s_fashion_rtaye4.jpg',
      alt: "Men's Fashion",
    }
  ];

  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-10">
          For all-day, everyday - <span className='text-red-900'>Snitch</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {lifestyleImages.map((image) => (
            <div
              key={image.id}
              className="overflow-hidden rounded-[40px]"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-[400px] h-[400px] object-cover shadow-lg transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LifestyleSection;
