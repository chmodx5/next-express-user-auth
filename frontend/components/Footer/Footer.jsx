import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  FaRegUserCircle,
  FaUserCircle,
  FaSync,
  FaHeart,
  FaUserAlt,
  FaRegHeart,
  FaRocketchat,
  FaFireAlt,
  FaBell,
  FaCog,
} from "react-icons/fa";
import Card from "../Card/Card";
import { IconButton } from "../IconButton/IconButton";

const Footer = () => {
  const router = useRouter();
  return (
    <div className=" fixed bottom-0 w-full sm:w-[24rem] md:w-[28em]  ">
      <Card>
        <ul className="flex justify-between">
          <li>
            <Link href={"/"}>
              <IconButton
                active={router.pathname == "/"}
                icon={<FaFireAlt />}
              />
            </Link>
          </li>
          <li>
            <Link href={"/notifications"}>
              <IconButton
                active={router.pathname == "/notifications"}
                icon={<FaBell />}
              />
            </Link>
          </li>
          <li>
            <Link href={"/inbox"}>
              <IconButton
                active={router.pathname == "/inbox"}
                icon={<FaRocketchat />}
              />
            </Link>
          </li>
          <li>
            <Link href={"/account"}>
              <IconButton
                active={router.pathname == "/account"}
                icon={<FaUserAlt />}
              />
            </Link>
          </li>
          <li>
            <Link href={"/settings"}>
              <IconButton
                active={router.pathname == "/settings"}
                icon={<FaCog />}
              />
            </Link>
          </li>
        </ul>
      </Card>
    </div>
  );
};

export default Footer;
const FooterIconButton = ({ icon, active, small }) => {
  return (
    <button
      className={` ${
        active
          ? " outline outline-primary-main text-primary-text bg-primary-main hover:bg-gray-200 hover:text-primary-main"
          : ""
      } bg-gray-200 rounded-md flex items-center justify-center ${
        small ? "h-10 w-10" : "h-14 w-14"
      } hover:outline hover:outline-primary-main text-gray-500 hover:text-primary-main text-xl`}
    >
      {icon}
    </button>
  );
};
