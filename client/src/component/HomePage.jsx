import React from "react";
import { Button, DatePicker, InputNumber, Select } from "antd";
import "antd/dist/reset.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Navigation from "./Navigation";
import Footer from "./Footer";
const { RangePicker } = DatePicker;
const { Option } = Select;

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const HomePage = () => {
  return (
    <div>
      <Navigation  />
      {/* Search */}
      <div
        className="absolute top-0 left-0 w-full h-[600px] bg-center bg-cover"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1720037574608-d3acb83d5353?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
        }}
      ></div>
      <div className="relative top-0 z-10 flex items-center justify-center w-full h-[505px] bg-black bg-opacity-50">
        <div className="w-full max-w-lg p-6 mx-auto bg-gray-100 rounded-lg shadow-md bg-opacity-90">
          <div className="flex flex-col space-y-4">
            <Select className="w-full" placeholder="City">
              <Option value="Ho Chi Minh City">Ho Chi Minh City</Option>
              {/* Add more options as needed */}
            </Select>
            <RangePicker className="w-full" />
            <InputNumber
              className="w-full"
              min={1}
              max={10}
              defaultValue={2}
              placeholder="2 Adult"
            />
            <Button type="primary" className="w-full">
              Search
            </Button>
          </div>
        </div>
      </div>
      {/* Background  */}
      <div className="bg-sky-50 ">
        <div className="container items-center justify-center mx-auto ">
          {/* promotion */}
          <div className="mt-6 text-center">
            <h2 className="text-2xl font-semibold">Accommodation Promotions</h2>
            <Carousel
              customTransition="all 1"
              transitionDuration={1000}
              className="space-x-4"
              autoPlay={true}
              autoPlaySpeed={5000}
              responsive={responsive}
              ssr={true}
              infinite={true}
              swipeable={false}
              draggable={false}
              arrows
            >
              <div>
                <img
                  src="https://images.unsplash.com/photo-1721851816044-12c426dba59c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI2fGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D"
                  alt="Promotion 1"
                  className="object-cover w-[500px] h-[300px]"
                />
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1722104784480-52b6fc3e3a34?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D"
                  alt="Promotion 2"
                  className="object-cover  w-[500px] h-[300px]"
                />
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1721086130975-83605296fdbb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE2N3xibzhqUUtUYUUwWXx8ZW58MHx8fHx8"
                  alt="Promotion 3"
                  className="object-cover  w-[500px] h-[300px]"
                />
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1605126068617-2c7aba682230?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Promotion 4"
                  className="object-cover  w-[500px] h-[300px]"
                />
              </div>
            </Carousel>
          </div>
          {/* Recommended places */}
          <div className="mt-6 text-center">
            <h2 className="text-2xl font-semibold">
              Recommended places to stay for your next trip!
            </h2>
            <Carousel
              infinite={true}
              swipeable={false}
              draggable={false}
              responsive={responsive}
              arrows
            >
              <div>
                <img
                  src="https://images.unsplash.com/photo-1722068992046-e69ea55f1b6e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Hotel 1"
                  className="object-cover w-[400px] h-[300px]"
                />
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1721086130975-83605296fdbb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE2N3xibzhqUUtUYUUwWXx8ZW58MHx8fHx8"
                  alt="Hotel 1"
                  className="object-cover w-[400px] h-[300px]"
                />
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1722068992046-e69ea55f1b6e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Hotel 1"
                  className="object-cover w-[400px] h-[300px]"
                />
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1721086130975-83605296fdbb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE2N3xibzhqUUtUYUUwWXx8ZW58MHx8fHx8"
                  alt="Hotel 1"
                  className="object-cover w-[400px] h-[300px]"
                />
              </div>
            </Carousel>
          </div>
          {/* About us */}
          <div className="mt-6 mb-3 text-center">
            <h2 className="text-2xl font-semibold">About Us</h2>
            <div className="flex space-x-4 ">
              <div className="flex-1 p-4 bg-white rounded-lg shadow-md">
                <img
                  src="https://i.pinimg.com/236x/53/9a/9e/539a9e33d7bad3c3e22b529739ceb027.jpg"
                  alt="Profile 1"
                  className="w-full rounded-lg"
                />
                <h3 className="mt-2 text-lg font-semibold">Phuong Uyen</h3>
                <p className="text-gray-600">UI Designer</p>
              </div>
              <div className="flex-1 p-4 bg-white rounded-lg shadow-md">
                <img
                  src="https://i.pinimg.com/236x/60/d2/e4/60d2e4fbde1f22d80d92c04857426451.jpg"
                  alt="Profile 2"
                  className="w-full rounded-lg"
                />
                <h3 className="mt-2 text-lg font-semibold">Mai Thy</h3>
                <p className="text-gray-600">Developer</p>
              </div>
              <div className="flex-1 p-4 bg-white rounded-lg shadow-md">
                <img
                  src="https://i.pinimg.com/564x/dd/1a/28/dd1a2892d22299513b7e2935f6e8ca9c.jpg"
                  alt="Profile 3"
                  className="w-full rounded-lg"
                />
                <h3 className="mt-2 text-lg font-semibold">Quoc Bao</h3>
                <p className="text-gray-600">Developer</p>
              </div>
              <div className="flex-1 p-4 bg-white rounded-lg shadow-md">
                <img
                  src="https://i.pinimg.com/236x/21/33/e9/2133e904a3f3947728477ca0161f4d23.jpg"
                  alt="Profile 4"
                  className="w-full rounded-lg"
                />
                <h3 className="mt-2 text-lg font-semibold">Quoc Anh</h3>
                <p className="text-gray-600">UI Designer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;