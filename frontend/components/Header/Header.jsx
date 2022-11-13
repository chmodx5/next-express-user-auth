import React from "react";
import Card from "../Card/Card";
import { IconButton } from "../IconButton/IconButton";
import { FaChevronLeft } from "react-icons/fa";
import { useRouter } from "next/router";
const Header = () => {
  const router = useRouter();
  return (
    <header className="fixed top-0 w-full sm:w-[24rem] md:w-[28em]  h-14 z-10">
      <Card classes={"h-full flex items-center"}>
        <IconButton
          small
          icon={<FaChevronLeft />}
          onClick={() => router.back()}
        />

        <h1 className="font-semibold">Swipe left</h1>
      </Card>
    </header>
  );
};

export default Header;
