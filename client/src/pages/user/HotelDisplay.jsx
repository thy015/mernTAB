import React from "react";
import { Carousel, Row, Col } from "antd";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/reset.css"; // Ensure you have antd's CSS

const properties = [
  {
    title: "Aparthotel Stare Miasto",
    location: "Old Town, Ba Lan, Kraków",
    rating: "8.8",
    review: "Tuyệt vời",
    reviewsCount: "3.011 đánh giá",
    price: "VND 5.152.432",
    imgSrc: "https://via.placeholder.com/300",
  },
  {
    title: "7Seasons Apartments Budapest",
    location: "06. Terézváros, Hungary, Budapest",
    rating: "8.8",
    review: "Tuyệt vời",
    reviewsCount: "11.551 đánh giá",
    price: "VND 4.925.385",
    imgSrc: "https://via.placeholder.com/300",
  },
  {
    title: "Oriente Palace Apartments",
    location: "Centro, Tây Ban Nha, Madrid",
    rating: "9.0",
    review: "Tuyệt hảo",
    reviewsCount: "3.215 đánh giá",
    price: "VND 3.392.621",
    imgSrc: "https://via.placeholder.com/300",
  },
  {
    title: "Downtown Synagogue",
    location: "07. Erzsébetváros, Hungary, Budapest",
    rating: "8.3",
    review: "Rất tốt",
    reviewsCount: "114 đánh giá",
    price: "VND 1.651.982",
    imgSrc: "https://via.placeholder.com/300",
  },
];

const PropertyCard = ({ property }) => {
  return (
    <Card className="shadow-sm" style={{ borderRadius: "12px" }}>
      <Card.Img
        variant="top"
        src={property.imgSrc}
        style={{
          borderRadius: "12px 12px 0 0",
          height: "180px",
          objectFit: "cover",
        }}
      />
      <Card.Body>
        <Card.Title>{property.title}</Card.Title>
        <Card.Text>{property.location}</Card.Text>
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
            {property.review} · {property.reviewsCount}
          </div>
        </div>
        <div className="mt-3" style={{ fontWeight: "bold", fontSize: "16px" }}>
          Bắt đầu từ {property.price}
        </div>
      </Card.Body>
    </Card>
  );
};

const PropertyGrid = () => {
  const slides = [];

  // Group properties into slides of 4
  for (let i = 0; i < properties.length; i += 4) {
    slides.push(
      <div key={i}>
        <Row gutter={[16, 16]}>
          {properties.slice(i, i + 4).map((property, index) => (
            <Col key={index} xs={24} sm={12} md={6}>
              <PropertyCard property={property} />
            </Col>
          ))}
        </Row>
      </div>
    );
  }

  return (
    <Carousel arrows swipeToSlide>
      {slides}
    </Carousel>
  );
};

export default PropertyGrid;
