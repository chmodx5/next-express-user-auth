import React from "react";

export const IconButton = ({ icon, active, small, ...props }) => {
  return (
    <button
      className={` ${
        active
          ? " outline outline-primary-main text-primary-text bg-primary-main hover:bg-primary-main/80 hover:text-primary-text"
          : "bg-gray-200 text-gray-500 "
      }  rounded-md flex items-center justify-center ${
        small ? "h-10 w-10" : "h-14 w-14"
      } hover:outline hover:outline-primary-main hover:text-primary-main text-xl`}
      {...props}
    >
      {icon}
    </button>
  );
};
