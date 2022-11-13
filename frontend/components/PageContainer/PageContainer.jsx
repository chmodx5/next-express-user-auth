import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const PageContainer = ({ children }) => {
  return (
    <main className="bg-gray-100 min-h-screen ">
      <div className="w-full h-full sm:w-[24rem] md:w-[28em]  mx-auto relative">
        <Header />
        <main className=" pt-16 px-4 sm:px-0">{children}</main>
        <Footer />
      </div>
    </main>
  );
};

export default PageContainer;
