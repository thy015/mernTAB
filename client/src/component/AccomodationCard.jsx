import React from 'react';
import {Button, Rate } from 'antd';
import { Card } from "react-bootstrap";
// hotel display page
const AccommodationCard = ({ hotel }) => {
  return (
    <Card
      title={hotel.name}
      extra={<span>{hotel.rating} Tuyệt hảo</span>}
      style={{ width: 300, marginBottom: '20px' }}
    >
      <p>{hotel.location}</p>
      <p>Giá: {hotel.price} VND</p>
      <p><Rate disabled defaultValue={hotel.rating / 2} /></p>
      <Button type="primary">Xem chỗ trống</Button>
    </Card>
  );
};
// homepage display
const PropertyCard = ({ property }) => {
    return (
  
      <Card className="shadow-sm h-full" style={{ borderRadius: "12px" }}>
        <Card.Img
          variant="top"
          src={property.hotelImg}
          style={{
            borderRadius: "12px 12px 0 0",
            height: "180px",
            objectFit: "cover",
          }}
        />
        <Card.Body className="h-[180px] flex flex-col flex-grow-1">
          <Card.Title>{property.hotelName}</Card.Title>
          <Card.Text>{property.address}</Card.Text>
          <div className="d-flex align-items-center">
            <div
              style={{
                backgroundColor: "#003580",
                color: "white",
                padding: "0 8px",
                borderRadius: "5px",
                fontWeight: "bold",
              }}
            >
              {property.rating}
            </div>
            <div style={{ marginLeft: "8px" }}>
              {property.numberOfRated} people have rated - {property.businessType}
            </div>
          </div>
          <div className="mt-3" style={{ fontWeight: "bold", fontSize: "16px" }}>
            Start from {property.minPrice} vnd
          </div>
        </Card.Body>
      </Card>
      
    );
  };
  

export {PropertyCard,AccommodationCard}
