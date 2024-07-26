import React from 'react';
import { DatePicker, Select, InputNumber, Button } from 'antd';
import 'antd/dist/reset.css';

const { RangePicker } = DatePicker;
const { Option } = Select;

const SearchBar = () => {
  return (
    <div className="w-3/4 p-6 bg-white rounded-lg shadow-md">
      <div className="flex space-x-4">
        <Select className="w-1/4" placeholder="City">
          <Option value="Ho Chi Minh City">Ho Chi Minh City</Option>
          {/* Add more options as needed */}
        </Select>
        <RangePicker className="w-1/4" />
        <InputNumber className="w-1/4" min={1} max={10} defaultValue={2} />
        <Button type="primary" className="w-1/4">Search</Button>
      </div>
    </div>
  );
};

export default SearchBar;
