import React, { useState } from "react";
import { Input, DatePicker, Dropdown, Button, Row, Col } from "antd";
import { CalendarOutlined } from "@ant-design/icons";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { triggerFocus } from "antd/es/input/Input";
const { RangePicker } = DatePicker;

const Booking = () => {
  // date picker
  const [dayStart, setDayStart] = useState("");
  const [dayEnd, setDayEnd] = useState("");

  dayjs.extend(customParseFormat);
  const disabledDate = (current) => {
    return current && current < dayjs().endOf("day") - 1;
  };

  // for the person
  const [count, setCount] = useState(0);
  const items = [
    {
      label: (
        <div className="p-4">
          <div className="flex items-center justify-between">
            <span>Adults</span>
            <div className="flex items-center">
              <Button
                onClick={() => setCount(prevCount=>prevCount-1)}
                size="small"
                className="mr-2"
                disabled={count===0}
              >
                -
              </Button>
              <span>{count}</span>
              <Button
                onClick={() => setCount(prevCount=>prevCount+1)}
                size="small"
                className="ml-2"
              >
                +
              </Button>
            </div>
          </div>
        </div>
      ),
      key: "0",
    },
  ];
  const handleDateChange = (dates) => {
    if (dates && dates.length === 2) {
      setDayStart(dates[0].format("YYYY-MM-DD"));
      setDayEnd(dates[1].format("YYYY-MM-DD"));
    } else {
      setDayStart(null);
      setDayEnd(null);
    }
  };

  return (
    <div
      className="flex absolute top-[68%] left-[20%] w-[60%] 
     bg-gray-100 border-4 border-yellow-400 rounded-lg 
     overflow-hidden h-16 items-center"
    >
      <Row gutter={0} className="w-full">
        <Col span={6}>
          <Input
            placeholder="Where you want to go?"
            prefix={
              <img src="/icon/double-bed.png" alt="Bed Icon" className="" />
            }
            className="rounded-none h-16"
            bordered={false}
          />
        </Col>
        <Col span={8}>
          <RangePicker
            suffixIcon={<CalendarOutlined />}
            disabledDate={disabledDate}
            onChange={handleDateChange}
            className="rounded-none h-16 w-full"
            bordered={false}
          />
        </Col>
        <Col span={6}>
          <Dropdown
            menu={{
              items,
            }}
            trigger={["click"]}
            arrow
            placement="bottomRight"
            getPopupContainer={(triggerFocus)}
          >
            <div className="h-16 w-full rounded-none justify-center flex items-center">
              People
            </div>
          </Dropdown>
        </Col>
        <Col span={4}>
          <Button type="primary" className="h-16 w-full rounded-none">
            Search
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default Booking;
