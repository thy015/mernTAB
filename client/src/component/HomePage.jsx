import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { DatePicker, Form, Input, Button, InputNumber, Row, Col } from "antd";
import Slider from "react-slick";
import "../index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const { RangePicker } = DatePicker;

const formItemLayout = {
  labelCol: { xs: { span: 24 }, sm: { span: 24 }, md: { span: 8 } },
  wrapperCol: { xs: { span: 24 }, sm: { span: 24 }, md: { span: 16 } },
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: { span: 24, offset: 0 },
    sm: { span: 24, offset: 0 },
    md: { span: 16, offset: 8 },
  },
};

export const HomePage = () => {
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="mr-auto navbar-nav"></ul>
        </div>
      </nav>

      <div
        className="search-section"
        style={{
          backgroundImage:
            "url('https://cdnphoto.dantri.com.vn/nc9PDzeEkt5hPw4Z5xzsIpsv5os=/thumb_w/960/2021/05/13/68-c-25-b-21-c-86-b-02-fdfdd-6-c-049034257-cc-1620894216549.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "50px 0",
        }}
      >
        <div
          className="container p-6 mx-auto text-center bg-white rounded shadow-lg"
          style={{ maxWidth: 600 }}
        >
          <Form
            {...formItemLayout}
            style={{ margin: "0 auto", position: "relative", zIndex: 10 }}
          >
            <Form.Item
              label="Địa chỉ"
              name="search"
              rules={[{ required: true, message: "Please input search term!" }]}
            >
              <Input placeholder="Search..." />
            </Form.Item>

            <Form.Item
              label="Ngày đặt phòng"
              name="RangePicker"
              rules={[{ required: true, message: "Please input!" }]}
            >
              <RangePicker
                placeholder={["Ngày nhận", "Ngày trả"]}
                style={{ width: "100%" }}
              />
            </Form.Item>

            <Form.Item
              label="Số hành khách"
              name="adultsAndChildren"
              rules={[{ required: true, message: "Please select numbers!" }]}
            >
              <Row gutter={8} justify="center">
                <Col span={12}>
                  <InputNumber
                    min={1}
                    max={100}
                    style={{ width: "100%" }}
                    placeholder="Người lớn"
                  />
                </Col>
                <Col span={12}>
                  <InputNumber
                    min={0}
                    max={100}
                    style={{ width: "100%" }}
                    placeholder="Trẻ em"
                  />
                </Col>
              </Row>
            </Form.Item>

            <Form.Item {...tailFormItemLayout}>
              <Button type="primary" htmlType="submit">
                Tìm kiếm
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>

      <div
        className="flex flex-col items-center w-screen h-screen-90vh"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/355311/pexels-photo-355311.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: "0.75",
        }}
      >
        <h3 className="mt-20 mb-10 text-5xl text-white">
          Accommodation Promotions
        </h3>

        <div className="container mx-auto">
          <Slider {...carouselSettings}>
            <div>
              <img
                src="https://www.littlehotelier.com/app/uploads/2021/08/GettyImages-1286931542-e1628053718512.jpg"
                alt="Image 1"
                className="object-cover w-full h-64 rounded-lg"
              />
            </div>
            <div>
              <img
                src="https://www.littlehotelier.com/app/uploads/2021/03/GettyImages-1050168672-1.jpg"
                alt="Image 2"
                className="object-cover w-full h-64 rounded-lg"
              />
            </div>
            <div>
              <img
                src="https://www.littlehotelier.com/app/uploads/2023/09/Pre-arrival-thumbnail-1116x500-1.png"
                alt="Image 3"
                className="object-cover w-full h-64 rounded-lg"
              />
            </div>
            <div>
              <img
                src="https://www.littlehotelier.com/app/uploads/2024/04/img-hotel-santa-maria-1.jpg"
                alt="Image 4"
                className="object-cover w-full h-64 rounded-lg"
              />
            </div>
            <div>
              <img
                src="https://www.littlehotelier.com/app/uploads/2022/07/local-guide-thumbnail.png"
                alt="Image 5"
                className="object-cover w-full h-64 rounded-lg"
              />
            </div>
            <div>
              <img
                src="https://www.littlehotelier.com/app/uploads/2023/09/Post-stay-thumbnail-1116x500-1.png"
                alt="Image 6"
                className="object-cover w-full h-64 rounded-lg"
              />
            </div>
          </Slider>
        </div>

        <h3 className="mt-16 text-5xl text-white">
          Recommend Places To Stay For Your Next Trip
        </h3>

        <div className="container mx-auto">
          <Slider {...carouselSettings}>
            <div className="relative">
              <img
                src="https://ik.imagekit.io/tvlk/image/imageResource/2021/11/25/1637851600794-f02453e5e7d6bc0533503519b44bd817.png?tr=q-75,w-320"
                alt="Image 3"
                className="object-cover w-full h-full"
              />
              <div className="absolute bottom-0 w-full p-2 text-center text-white bg-black bg-opacity-50">
                <h4>Quy Nhơn</h4>
                <p>
                  Nổi tiếng với Thánh địa Mỹ sơn thu hút đa số du khách, là di
                  sản văn hóa nổi tiếng ...
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://ik.imagekit.io/tvlk/image/imageResource/2019/12/17/1576562552167-c0b352557fc46d88eb18b7966824db8f.jpeg?tr=q-75,w-320"
                alt="Image 4"
                className="object-cover w-full h-full"
              />
              <div className="absolute bottom-0 w-full p-2 text-center text-white bg-black bg-opacity-50">
                <h4>Đà Lạt</h4>
                <p>Tất tần tật cách du lịch ở thành phố mộng mơ ...</p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://ik.imagekit.io/tvlk/image/imageResource/2021/11/25/1637851505067-e5745050cc951e5c9c11b01c1d0ff920.png?tr=q-75,w-320"
                alt="Image 5"
                className="object-cover w-full h-full"
              />
              <div className="absolute bottom-0 w-full p-2 text-center text-white bg-black bg-opacity-50">
                <h4>Hà Nội</h4>
                <p>Thủ Đô-niềm tin yêu đứng đầu cả nước</p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://ik.imagekit.io/tvlk/image/imageResource/2021/11/25/1637851894841-e5d7f8e7abc30ff0f1f07f6d7a64eac1.png?tr=q-75,w-320"
                alt="Image 6"
                className="object-cover w-full h-full"
              />
              <div className="absolute bottom-0 w-full p-2 text-center text-white bg-black bg-opacity-50">
                <h4>Đà Nẵng</h4>
                <p>Du lịch Đà Nẵng vui quên lối về cùng ...</p>
              </div>
            </div>
          </Slider>
        </div>

        <h3 className="mt-16 text-5xl text-white">About Us</h3>

        <div className="container mx-auto">
          <Slider {...carouselSettings}>
            <div>
              <img
                src="https://www.odysseahotels.com/media/filer_public/11/6a/116a18ab-e30b-438c-bf0f-d403b61873db/img_2677.jpg"
                alt="Image 1"
                className="object-cover w-full h-full"
              />
            </div>
            <div>
              <img
                src="https://www.odysseahotels.com/media/filer_public/07/bf/07bfa56e-0c18-46cf-b907-1898edadbbbe/salesmarketing.jpg"
                alt="Image 2"
                className="object-cover w-full h-full"
              />
            </div>
            <div>
              <img
                src="https://www.odysseahotels.com/media/filer_public/12/bb/12bbc433-7261-4f33-b1d0-039e8a89b667/management_1200x800.jpg"
                alt="Image 3"
                className="object-cover w-full h-full"
              />
            </div>
            <div>
              <img
                src="https://www.odysseahotels.com/media/filer_public/3f/b5/3fb51baf-be0b-4645-a478-bc4c4349b38b/mission_1200x800_1_compress.png"
                alt="Image 4"
                className="object-cover w-full h-full"
              />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
