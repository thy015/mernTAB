import React from 'react';
import { Carousel } from 'antd';
import 'antd/dist/reset.css';

const AccommodationPromotions = () => {
  const promotions = [
    { id: 1, imageUrl: 'https://images.unsplash.com/photo-1440558899941-2b58b4b0e6ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw4N3x8ZW58MHx8fHx8' },
    { id: 2, imageUrl: 'https://images.unsplash.com/photo-1440558899941-2b58b4b0e6ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw4N3x8ZW58MHx8fHx8' },
    // Add more promotions as needed
  ];

  return (
    <div >
      <div className="container mx-auto">
        <h2 className="mb-4 text-2xl font-semibold text-center text-white">Accommodation Promotions</h2>
        <Carousel>
          {promotions.map((promo) => (
            <div key={promo.id} className="p-4 bg-white rounded shadow-md">
              <img src={promo.imageUrl} alt={`Promo ${promo.id}`} className="object-cover w-full h-48 mb-2 rounded" />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default AccommodationPromotions;