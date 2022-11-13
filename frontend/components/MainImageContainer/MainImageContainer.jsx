import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IconButton } from "../IconButton/IconButton";
import { FaRegUserCircle, FaSync, FaRegHeart } from "react-icons/fa";

const MainImageContainer = () => {
  return (
    <div className=" w-full">
      <div className="w-full">
        <div className="aspect-square  relative">
          <div className="bg-gray-200 w-full h-full relative rounded-md">
            <Image
              fill
              className="absolute rounded-md"
              src="https://picsum.photos/id/64/300/300"
            />
          </div>
          <div className=" h-full w-full absolute top-0  flex items-end ">
            <div className="bg-gradient-to-t from-black py-6 w-full rounded-b-md">
              <div className="text-white w-7/12 px-4">
                <h2 className="font-bold capitalize text-white">
                  someone awesome
                  <span> 23</span>
                </h2>
                <p className="text-sm text-gray-100">
                  Im a sick fuck i like my dick sucked
                </p>
                <p className="text-xs text-gray-300">
                  Hobbies: swimming ,gyming, cooking
                </p>
                <p className="text-xs text-gray-300">Location: Nairobi</p>
              </div>
            </div>
          </div>
        </div>
        <div className="py-6">
          <ul className="flex justify-between items-center w-7/12 mx-auto">
            <li>
              <Link href={"/profile"}>
                <IconButton small icon={<FaRegUserCircle />} />
              </Link>
            </li>
            <li>
              <IconButton active icon={<FaSync />} />
            </li>
            <li>
              <IconButton small icon={<FaRegHeart />} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MainImageContainer;
