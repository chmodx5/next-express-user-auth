import React from "react";

const Card = ({ children, classes }) => {
  return (
    <div
      className={`bg-white rounded-md px-4 py-2 ${classes ? classes : null}`}
    >
      {children}
    </div>
  );
};

export default Card;
