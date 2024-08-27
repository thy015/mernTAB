import { Button, Dropdown } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faBars } from "@fortawesome/free-solid-svg-icons";
import ".././index.css";
const Header = ({ children }) => {
  const hoverEffect =
    "text-white font-bold transition-colors duration-300 hover:text-[#c3eaff] hover:scale-105";

  const items = [
    {
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          1st menu item
        </a>
      ),
      key: "0",
    },
    {
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          2nd menu item
        </a>
      ),
      key: "1",
    },
    {
      type: "divider",
    },
    {
      label: "3rd menu item（disabled）",
      key: "3",
      disabled: true,
    },
  ];
  return (
    <div>
      <nav class="bg-[#114098] flex justify-between items-center p-4">
        <ul class="flex space-x-5 ">
          <li>
            <Link to="/" className="no-underline ">
              <p className={hoverEffect}>Booking</p>
            </Link>
          </li>
          <li>
            <Link to="/" className="no-underline">
              <p className={hoverEffect}>Activities</p>
            </Link>
          </li>
          <li>
            <Link to="/" className="no-underline">
              <p className={hoverEffect}>Coupons and Discount</p>
            </Link>
          </li>
          <li>
            <Link to="/" className="no-underline">
              <p className={hoverEffect}>Membership</p>
            </Link>
          </li>
        </ul>
        <ul class="flex space-x-5">
          <li>
            <Link to="/" className="no-underline">
              <Button>Log In</Button>
            </Link>
          </li>
          <li>
            <Link to="/" className="no-underline">
              <Button>Sign Up</Button>
            </Link>
          </li>{" "}
          <li>
            <Link to="/" className="no-underline">
              <FontAwesomeIcon
                icon={faShoppingCart}
                size="lg"
                className="mt-2 text-white"
              />
            </Link>
          </li>
          <li>
            <Dropdown
              menu={{
                items,
              }}
            >
              <FontAwesomeIcon
                icon={faBars}
                size="lg"
                className="mt-2 text-white"
              />
            </Dropdown>
          </li>
        </ul>
      </nav>
      {children}
    </div>
  );
};

export default Header;
