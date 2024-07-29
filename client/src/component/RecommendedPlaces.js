import React from 'react';
import { Carousel } from 'antd';
import 'antd/dist/reset.css';

const RecommendedPlaces = () => {
  const places = [
    { id: 1, name: 'New World Saigon Hotel', price: '₫2,990,000', imageUrl: 'image-url-3' },
    { id: 2, name: 'Silverland Sakyo Hotel', price: '₫1,500,000', imageUrl: 'image-url-4' },
    { id: 3, name: 'LA VELA SAIGON HOTEL', price: '₫1,750,000', imageUrl: 'image-url-5' },
    { id: 4, name: 'New World Saigon Hotel', price: '₫2,990,000', imageUrl: 'image-url-3' },
    { id: 5, name: 'Silverland Sakyo Hotel', price: '₫1,500,000', imageUrl: 'image-url-4' },
    { id: 6, name: 'LA VELA SAIGON HOTEL', price: '₫1,750,000', imageUrl: 'image-url-5' },
    // Add more places as needed
  ];

  return (
    <div className="py-8">
      <div className="container mx-auto">
        <h2 className="mb-4 text-2xl font-semibold text-center">Recommended places to stay for your next trip!</h2>
        <Carousel slidesToShow={3} responsive={[
            { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } },
            { breakpoint: 600, settings: { slidesToShow: 1, slidesToScroll: 1 } },
          ]}
        >
          {places.map((place) => (
            <div key={place.id} className="p-4 bg-white rounded shadow-md">
              <img src={place.imageUrl} alt={place.name} className="object-cover w-full h-48 mb-2 rounded" />
              <h3 className="text-xl font-bold">{place.name}</h3>
              <p className="text-red-500">{place.price}</p>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default RecommendedPlaces;