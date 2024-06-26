"use client";
import React, { PropsWithChildren, useEffect, useState } from "react";
// import { useDisclosure, Button } from "@chakra-ui/react";
import Image from "next/image";
import clsx from "clsx";
// import { ArrowUpOutlined } from "@ant-design/icons";

import Navbar from "./Navbar";
import Footer from "./Footer";

import Provider from "@/library/Provider";

// import { barlow } from "@/utils/font";
import AppBackground from "@/assets/background.png";

import { useIsMounted } from "@/hooks/useIsMounted";

import "./style.css";

interface Props extends PropsWithChildren {}

const BaseLayout: React.FC<Props> = ({ children }) => {
  const isMounted = useIsMounted();
  const [isLoaded, setIsLoaded] = useState(false);

  // const {
  //   isOpen: isScroll,
  //   onOpen: onOpenScroll,
  //   onClose: onCloseScroll,
  // } = useDisclosure();

  useEffect(() => {
    if (isMounted) {
      const timeOut = setTimeout(() => {
        setIsLoaded(true);
      }, 2000);

      return () => clearTimeout(timeOut);
    }
  }, [isMounted, isLoaded]);

  // useEffect(() => {
  //   window?.addEventListener("scroll", handleScroll);
  //   return () => window?.removeEventListener("scroll", handleScroll);
  // }, []);

  // const handleScroll = (e: Event) => {
  //   const { scrollY } = e.currentTarget as Window;
  //   if (scrollY > 160) {
  //     onOpenScroll();
  //   }
  //   if (scrollY === 0) {
  //     onCloseScroll();
  //   }
  // };

  // const scrollToTop = () => {
  //   if (window) {
  //     window.scrollTo({
  //       top: 0,
  //       behavior: "smooth",
  //     });
  //   }
  // };

  return (
    <Provider>
      <Navbar />
      <main className={clsx("base-main-container")}>
        {isMounted && isLoaded && (
          <Image
            src={AppBackground}
            alt="roadmap"
            priority
            className="w-full h-full absolute top-0 left-0 bg-cover bg-center bg-no-repeat"
          />
        )}
        {children}

        {/* <div
          className={`${
            isScroll ? "fixed" : "hidden"
          } bottom-12 right-2 z-[999] animate-fadeInBase`}
        >
          <Button
            className="font-bold bg-renon-primary hover:bg-renon-secondary text-white border-transparent hover:!border-transparen w-12 lg:w-16 h-12 lg:h-16 rounded-full"
            colorScheme="purple"
            size={"md"}
            onClick={scrollToTop}
          >
            <ArrowUpOutlined className="text-xl lg:text-3xl font-bold mt-2" />
          </Button>
        </div> */}
      </main>
      <Footer />
    </Provider>
  );
};

export default BaseLayout;
