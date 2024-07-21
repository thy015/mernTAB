import React, { useState } from "react";

const tabs = [
  {
    name: "Premier Room Twin",
    content: (
      <div className="grid grid-cols-5 gap-4 p-4 bg-white shadow-md rounded-xl">
        <div className="col-span-2">
          <img
            src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0"
            alt="Premier Room Twin"
            className="object-cover w-full h-32 mb-4 rounded"
          />
          <div className="grid grid-cols-3 gap-1">
            <img
              src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0"
              alt="Room detail 1"
              className="object-cover w-full h-16 rounded"
            />
            <img
              src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0"
              alt="Room detail 2"
              className="object-cover w-full h-16 rounded"
            />
            <img
              src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0"
              alt="Room detail 3"
              className="object-cover w-full h-16 rounded"
            />
          </div>
        </div>
        <div className="col-span-2">
          <h2 className="mb-2 text-xl font-bold">Lợi ích</h2>
          <p className="mb-2">Giá của bạn bao gồm:</p>
          <ul className="mb-4 list-disc list-inside">
            <li>Giá siêu thấp!</li>
            <li>Bãi đậu xe miễn phí, wifi, nước uống</li>
            <li>Bữa sáng</li>
          </ul>
          <h2 className="mb-2 text-xl font-bold">Sức chứa</h2>
          <p className="mb-2">2 Người</p>
        </div>
        <div className="flex flex-col items-end justify-between col-span-1">
          <div>
            <p className="mb-1 text-xs text-gray-500">20,400 reviews</p>
            <span className="inline-block px-2 py-1 mb-2 text-green-500 bg-green-200 rounded">
              Excellent
            </span>
          </div>
          <div>
            <p className="text-sm text-gray-500 line-through">₫4,760,000</p>
            <p className="text-sm text-gray-500 line-through">₫3,230,000</p>
            <p className="text-xl font-semibold text-red-500">₫1,500,000</p>
            <button className="px-4 py-2 mt-2 text-white bg-blue-500 rounded">
              Đặt phòng
            </button>
          </div>
        </div>
      </div>
    ),
  },
  {
    name: "Deluxe Room",
    content: (
      <div className="grid grid-cols-5 gap-4 p-4 bg-white shadow-md rounded-xl">
        <div className="col-span-2">
          <img
            src="https://images.unsplash.com/photo-1570129477492-45c003edd2be"
            alt="Deluxe Room"
            className="object-cover w-full h-32 mb-4 rounded"
          />
          <div className="grid grid-cols-3 gap-1">
            <img
              src="https://images.unsplash.com/photo-1570129477492-45c003edd2be"
              alt="Room detail 1"
              className="object-cover w-full h-16 rounded"
            />
            <img
              src="https://images.unsplash.com/photo-1570129477492-45c003edd2be"
              alt="Room detail 2"
              className="object-cover w-full h-16 rounded"
            />
            <img
              src="https://images.unsplash.com/photo-1570129477492-45c003edd2be"
              alt="Room detail 3"
              className="object-cover w-full h-16 rounded"
            />
          </div>
        </div>
        <div className="col-span-2">
          <h2 className="mb-2 text-xl font-bold">Lợi ích</h2>
          <p className="mb-2">Giá của bạn bao gồm:</p>
          <ul className="mb-4 list-disc list-inside">
            <li>Giá ưu đãi!</li>
            <li>Bãi đậu xe miễn phí, wifi, nước uống</li>
            <li>Bữa sáng</li>
          </ul>
          <h2 className="mb-2 text-xl font-bold">Sức chứa</h2>
          <p className="mb-2">3 Người</p>
        </div>
        <div className="flex flex-col items-end justify-between col-span-1">
          <div>
            <p className="mb-1 text-xs text-gray-500">15,300 reviews</p>
            <span className="inline-block px-2 py-1 mb-2 text-green-500 bg-green-200 rounded">
              Great
            </span>
          </div>
          <div>
            <p className="text-sm text-gray-500 line-through">₫5,200,000</p>
            <p className="text-sm text-gray-500 line-through">₫4,200,000</p>
            <p className="text-xl font-semibold text-red-500">₫2,000,000</p>
            <button className="px-4 py-2 mt-2 text-white bg-blue-500 rounded">
              Đặt phòng
            </button>
          </div>
        </div>
      </div>
    ),
  },
  {
    name: "Deluxe Triple Room",
    content: (
      <div className="grid grid-cols-5 gap-4 p-4 bg-white shadow-md rounded-xl">
        <div className="col-span-2">
          <img
            src="https://images.unsplash.com/photo-1522770179533-24471fcdba45"
            alt="Deluxe Triple Room"
            className="object-cover w-full h-32 mb-4 rounded"
          />
          <div className="grid grid-cols-3 gap-1">
            <img
              src="https://images.unsplash.com/photo-1522770179533-24471fcdba45"
              alt="Room detail 1"
              className="object-cover w-full h-16 rounded"
            />
            <img
              src="https://images.unsplash.com/photo-1522770179533-24471fcdba45"
              alt="Room detail 2"
              className="object-cover w-full h-16 rounded"
            />
            <img
              src="https://images.unsplash.com/photo-1522770179533-24471fcdba45"
              alt="Room detail 3"
              className="object-cover w-full h-16 rounded"
            />
          </div>
        </div>
        <div className="col-span-2">
          <h2 className="mb-2 text-xl font-bold">Lợi ích</h2>
          <p className="mb-2">Giá của bạn bao gồm:</p>
          <ul className="mb-4 list-disc list-inside">
            <li>Giá giảm!</li>
            <li>Bãi đậu xe miễn phí, wifi, nước uống</li>
            <li>Bữa sáng</li>
          </ul>
          <h2 className="mb-2 text-xl font-bold">Sức chứa</h2>
          <p className="mb-2">4 Người</p>
        </div>
        <div className="flex flex-col items-end justify-between col-span-1">
          <div>
            <p className="mb-1 text-xs text-gray-500">12,400 reviews</p>
            <span className="inline-block px-2 py-1 mb-2 text-green-500 bg-green-200 rounded">
              Very Good
            </span>
          </div>
          <div>
            <p className="text-sm text-gray-500 line-through">₫6,000,000</p>
            <p className="text-sm text-gray-500 line-through">₫5,000,000</p>
            <p className="text-xl font-semibold text-red-500">₫2,500,000</p>
            <button className="px-4 py-2 mt-2 text-white bg-blue-500 rounded">
              Đặt phòng
            </button>
          </div>
        </div>
      </div>
    ),
  },
  {
    name: "Executive Suite",
    content: (
      <div className="grid grid-cols-5 gap-4 p-4 bg-white shadow-md rounded-xl">
        <div className="col-span-2">
          <img
            src="https://images.unsplash.com/photo-1551218808-94e220e084d2"
            alt="Executive Suite"
            className="object-cover w-full h-32 mb-4 rounded"
          />
          <div className="grid grid-cols-3 gap-1">
            <img
              src="https://images.unsplash.com/photo-1551218808-94e220e084d2"
              alt="Room detail 1"
              className="object-cover w-full h-16 rounded"
            />
            <img
              src="https://images.unsplash.com/photo-1551218808-94e220e084d2"
              alt="Room detail 2"
              className="object-cover w-full h-16 rounded"
            />
            <img
              src="https://images.unsplash.com/photo-1551218808-94e220e084d2"
              alt="Room detail 3"
              className="object-cover w-full h-16 rounded"
            />
          </div>
        </div>
        <div className="col-span-2">
          <h2 className="mb-2 text-xl font-bold">Lợi ích</h2>
          <p className="mb-2">Giá của bạn bao gồm:</p>
          <ul className="mb-4 list-disc list-inside">
            <li>Giá cao cấp!</li>
            <li>Bãi đậu xe miễn phí, wifi, nước uống</li>
            <li>Bữa sáng</li>
          </ul>
          <h2 className="mb-2 text-xl font-bold">Sức chứa</h2>
          <p className="mb-2">5 Người</p>
        </div>
        <div className="flex flex-col items-end justify-between col-span-1">
          <div>
            <p className="mb-1 text-xs text-gray-500">9,800 reviews</p>
            <span className="inline-block px-2 py-1 mb-2 text-green-500 bg-green-200 rounded">
              Outstanding
            </span>
          </div>
          <div>
            <p className="text-sm text-gray-500 line-through">₫7,000,000</p>
            <p className="text-sm text-gray-500 line-through">₫6,000,000</p>
            <p className="text-xl font-semibold text-red-500">₫3,000,000</p>
            <button className="px-4 py-2 mt-2 text-white bg-blue-500 rounded">
              Đặt phòng
            </button>
          </div>
        </div>
      </div>
    ),
  },
];

const Hotel = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].name);

  return (
    <div className="container p-4 mx-auto">
      <div className="flex border-b border-gray-200">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            onClick={() => setActiveTab(tab.name)}
            className={`px-4 py-2 font-semibold text-gray-800 focus:outline-none ${
              activeTab === tab.name ? "border-b-2 border-blue-500" : ""
            }`}
          >
            {tab.name}
          </button>
        ))}
      </div>
      <div className="mt-4">
        {tabs.map(
          (tab) =>
            activeTab === tab.name && (
              <div key={tab.name} className="p-4 bg-blue-100 rounded">
                {tab.content}
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default Hotel;
