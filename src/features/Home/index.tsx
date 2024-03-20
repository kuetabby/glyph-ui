"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
// import { ReactTyped } from "react-typed";
// import Tilt from "react-parallax-tilt";
import { Button, List, ListItem } from "@chakra-ui/react";
// import { ArrowRightOutlined } from "@ant-design/icons";
// import { RobotIcon } from "@/utils/Icon/robot";

import YinLoader from "@/components/Loader/Custom";

import { useIsMounted } from "@/hooks/useIsMounted";

import { contractAddress, findUsLink, socialsLink } from "@/constants/links";
import {
  barlow,
  barlowBold,
  syne,
  syneBold,
  syneExtraBold,
} from "@/utils/font";
import { TelegramHeaderIcon, TwitterHeaderIcon } from "@/utils/Icon/socials";
// import { ecosystemList } from "./constants/ecosystem";
// import { roadmapList } from "./constants/roadmap";

// import { FeatureArrow } from "@/utils/Icon/arrow";

// import BannerApp from "@/assets/banner-nav.png";

import RedTokenomic from "@/assets/tokenomic-red.png";
import BlueTokenomic from "@/assets/tokenomic-blue.png";
import GreenTokenomic from "@/assets/tokenomic-green.png";

import HeaderLogo from "@/assets/header-image.png";
import AboutLogo from "@/assets/about.png";

import AudioLogo from "@/assets/audio.png";
import VideoLogo from "@/assets/video.png";
import GifEllipse1 from "@/assets/gif-ellipse-1.png";
import GifEllipse2 from "@/assets/gif-ellipse-2.png";

// import TokenAnalyzerLogo from "@/assets/token-analyzer.png";
// import NftAnalyzerLogo from "@/assets/nft-analyzer.png";
// import AddressAnalyzerLogo from "@/assets/address-analyzer.png";
// import PhisingAnalyzerLogo from "@/assets/site-analyzer.png";

// import {
//   GitbookIcon,
//   // MediumIcon,
//   TeleIcon,
//   TwitterIcon,
// } from "@/utils/Icon/socials";

// import HeroApp from "@/assets/hero-app.png";
// import LogoApp from "@/assets/logo-app.png";
// import TwitterLogo from "@/assets/logo-x.png";
// import TelegramLogo from "@/assets/logo-telegram.png";
// import GitBookLogo from "@/assets/logo-gitbook.png";
// import MediumLogo from "@/assets/logo-medium.png";
// import MapApp from "@/assets/map-app.png";
// import Dextools from "@/assets/dextools.png";
// import Dexscreener from "@/assets/dexscreener.png";
// import Uniswap from "@/assets/uniswap.png";
// import Etherscan from "@/assets/etherscan.png";
// import Solidproof from "@/assets/solidproof.png";
// import Coingecko from "@/assets/coingecko.png";

import "./style.css";

interface Props {}

const introVidUrl =
  "https://res.cloudinary.com/dwppcshmi/video/upload/f_auto:video,q_auto/v1/rabbit_images/y1tkrs3vpz3mvpocct6p";

const Home: React.FC<Props> = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const [isWelcomeVisible, setIsWelcomeVisible] = useState(false);
  const [isFeaturesVisible, setIsFeaturesVisible] = useState(false);
  const [isAboutVisible, setIsAboutVisible] = useState(false);
  const [isTokensVisible, setIsTokensVisible] = useState(false);

  const welcomeRef = useRef<HTMLDivElement | null>(null);
  const featuresRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const tokensRef = useRef<HTMLDivElement | null>(null);

  const isMounted = useIsMounted();
  // const [copyContent] = useCopyText();

  // useEffect(() => {
  //   if (isMounted) {
  //     const timeOut = setTimeout(() => {
  //       setIsLoaded(true);
  //     }, 2000);

  //     return () => clearTimeout(timeOut);
  //   }
  // }, [isMounted, isLoaded]);

  // useEffect(() => {
  //   if (isLoaded) {
  //     const observer = new IntersectionObserver((entries) => {
  //       const entry = entries[0];
  //       setIsWelcomeVisible(entry.isIntersecting);
  //     });

  //     observer.observe(welcomeRef.current as HTMLDivElement);
  //   }
  // }, [isLoaded]);

  // useEffect(() => {
  //   if (isLoaded) {
  //     const observer = new IntersectionObserver((entries) => {
  //       const entry = entries[0];
  //       setIsFeaturesVisible(entry.isIntersecting);
  //     });

  //     observer.observe(featuresRef.current as HTMLDivElement);
  //   }
  // }, [isLoaded]);

  // useEffect(() => {
  //   if (isLoaded) {
  //     const observer = new IntersectionObserver((entries) => {
  //       const entry = entries[0];
  //       setIsAboutVisible(entry.isIntersecting);
  //     });

  //     observer.observe(aboutRef.current as HTMLDivElement);
  //   }
  // }, [isLoaded]);

  // useEffect(() => {
  //   if (isLoaded) {
  //     const observer = new IntersectionObserver((entries) => {
  //       const entry = entries[0];
  //       setIsTokensVisible(entry.isIntersecting);
  //     });

  //     observer.observe(tokensRef.current as HTMLDivElement);
  //   }
  // }, [isLoaded]);

  if (isMounted) {
    return (
      <div className="homepage-container">
        {/* <div className="h-20" /> */}
        <div
          id="welcome"
          className="h-[7em] lg:h-[8em] xl:h-[9em] relative z-30"
        />
        <div className="welcome-container">
          <div className="welcome-wrapper">
            <div className="w-full sm:w-[47.5%] h-[400px] sm:h-full xl:h-[500px] my-auto">
              <Image
                src={HeaderLogo}
                alt="header"
                className="w-full h-full lg:object-contain"
              />
            </div>

            <div className="w-full sm:w-1/2 text-center sm:text-left">
              <h1
                className={`${syneBold.className} !font-bold text-4xl sm:text-5xl lg:text-7xl`}
              >
                GENERATE
              </h1>
              <h2
                className={`${syneExtraBold.className} !font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl my-4 md:my-6`}
              >
                YOUR AUDIO OR VIDEO TO TEXT
              </h2>
              <div className={`text-[#FFFFFFCC] ${barlow.className} text-base`}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </div>

              <div className="flex flex-wrap justify-center sm:justify-normal gap-4 mt-4">
                <Button
                  variant="outline"
                  className="text-white rounded-none"
                  leftIcon={<TelegramHeaderIcon />}
                >
                  Telegram
                </Button>

                <Button
                  variant="outline"
                  className="text-white rounded-none"
                  leftIcon={<TwitterHeaderIcon />}
                >
                  Twitter
                </Button>
              </div>
            </div>
            {/* <div
                ref={welcomeRef}
                className={`w-full md:w-3/4 h-full sm:px-8 lg:px-14 text-5xl xs:text-6xl md:text-7xl xl:text-8xl text-center flex flex-wrap justify-center items-center m-auto`}
              >
                <div
                  className={`${
                    isWelcomeVisible && "animate-slideInBottomBasic"
                  } ${syne.className} !font-bold`}
                >
                  Discover Your AI Needs
                </div>
              </div> */}
          </div>
        </div>

        <div className="h-12 md:h-20" />
        <div id="feature" className="h-24 sm:h-28 relative z-30" />
        <div className="w-full md:w-11/12 flex flex-wrap justify-evenly items-center gap-y-8 mx-auto mt-8 relative z-30">
          <div className="w-full sm:w-2/5 lg:w-[30%] h-[400px] bg-card border border-[#fff] rounded-2xl p-4 text-center relative">
            <div className="w-full h-full flex flex-wrap flex-col justify-evenly items-center relative">
              <div className="w-full relative z-50">
                <div className="absolute top-[15px] right-[75px] xs:right-[100px] sm:right-[50px] lg:right-[60px] 2xl:right-[75px]">
                  <Image
                    src={GifEllipse1}
                    alt="ellipse-1"
                    className="w-4 h-4"
                  />
                </div>
                <div
                  className={`w-20 mx-auto p-5 bg-[#5142FC] ${syneBold.className} rounded-2xl`}
                >
                  GIF
                </div>
                <Image
                  src={GifEllipse2}
                  alt="ellipse-2"
                  className="absolute top-[70px] left-[75px] xs:left-[100px] sm:left-[50px] lg:left-[75px] 2xl:left-[100px] w-3 h-3"
                />
              </div>

              <div className={`${syneBold.className} text-lg lg:text-2xl py-2`}>
                Text To Gif
              </div>

              <div className={`${barlow.className} text-[#DEDEDE]`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium
                nulla odio nascetur fusce.
              </div>
            </div>
          </div>

          <div className="w-full sm:w-2/5 lg:w-[30%] h-[400px] bg-card border border-[#fff] rounded-2xl p-4 text-center relative">
            <div className="w-full h-full flex flex-wrap flex-col justify-evenly items-center relative">
              <div className="w-full relative z-50">
                <div className="absolute top-[15px] right-[75px] xs:right-[100px] sm:right-[50px] lg:right-[60px] 2xl:right-[75px]">
                  <Image
                    src={GifEllipse1}
                    alt="ellipse-1"
                    className="w-4 h-4"
                  />
                </div>
                <div className={`w-20 mx-auto p-5 bg-[#47A432] rounded-2xl`}>
                  <Image
                    src={AudioLogo}
                    alt="audio"
                    className="w-5 h-5 mx-auto"
                  />
                </div>
                <Image
                  src={GifEllipse2}
                  alt="ellipse-2"
                  className="absolute top-[70px] left-[75px] xs:left-[100px] sm:left-[50px] lg:left-[75px] 2xl:left-[100px] w-3 h-3"
                />
              </div>

              <div className={`${syneBold.className} text-lg lg:text-2xl py-2`}>
                Text To Audio
              </div>

              <div className={`${barlow.className} text-[#DEDEDE]`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium
                nulla odio nascetur fusce.
              </div>
            </div>
          </div>

          <div className="w-full sm:w-2/5 lg:w-[30%] h-[400px] bg-card border border-[#fff] rounded-2xl p-4 text-center relative">
            <div className="w-full h-full flex flex-wrap flex-col justify-evenly items-center relative">
              <div className="w-full relative z-50">
                <div className="absolute top-[15px] right-[75px] xs:right-[100px] sm:right-[50px] lg:right-[60px] 2xl:right-[75px]">
                  <Image
                    src={GifEllipse1}
                    alt="ellipse-1"
                    className="w-4 h-4"
                  />
                </div>
                <div className={`w-20 mx-auto p-5 bg-[#9835FB] rounded-2xl`}>
                  <Image
                    src={VideoLogo}
                    alt="video"
                    className="w-5 h-5 mx-auto"
                  />
                </div>
                <Image
                  src={GifEllipse2}
                  alt="ellipse-2"
                  className="absolute top-[70px] left-[75px] xs:left-[100px] sm:left-[50px] lg:left-[75px] 2xl:left-[100px] w-3 h-3"
                />
              </div>

              <div className={`${syneBold.className} text-lg lg:text-2xl py-2`}>
                Text To Video
              </div>

              <div className={`${barlow.className} text-[#DEDEDE]`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium
                nulla odio nascetur fusce.
              </div>
            </div>
          </div>
        </div>

        <div className="h-28" />

        <div id="about" className="h-20 sm:h-28 relative z-30" />
        <div className="w-full text-center text-lg xs:text-xl lg:text-2xl font-extrabold text-white px-2 py-4 mx-auto">
          <div className="about-wrapper z-30">
            <div
              className={`w-full !font-bold text-3xl ${barlow.className} ${
                isAboutVisible && "animate-slideInBottomBasic"
              }`}
            >
              <span
                className={`${syneBold.className} text-3xl sm:text-4xl md:text-5xl lg:text-6xl`}
              >
                Glyph AI
              </span>
            </div>

            <div className="w-full xs:w-2/3 sm:w-1/2 lg:w-2/5 h-full mt-14 mx-auto">
              <div className={`w-full text-[#DEDEDE] ${barlow.className}`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium
                nulla odio nascetur fusce. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Pretium nulla odio nascetur fusce.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium
                nulla odio nascetur fusce.
              </div>
            </div>

            <div className="w-full xs:w-2/3 sm:w-1/2 lg:w-2/5 h-full my-14 mx-auto">
              <div className={`w-full text-[#DEDEDE] ${barlow.className}`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium
                nulla odio nascetur fusce. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Pretium nulla odio nascetur fusce.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium
                nulla odio nascetur fusce.
              </div>
            </div>

            <div className="w-full xs:w-2/3 sm:w-1/2 lg:w-2/5 h-full mx-auto">
              <div>{contractAddress}</div>

              <List className={`${barlowBold.className}`}>
                <ListItem>$GLYPH</ListItem>
                <ListItem>Total Supply : 100M</ListItem>
                <ListItem>Tax : 5/5</ListItem>
                <ListItem>Network : ETHEREUM </ListItem>
              </List>
            </div>

            <div className="w-full xs:w-2/3 sm:w-1/2 lg:w-2/5 h-full my-14 mx-auto">
              <Image
                src={AboutLogo}
                alt="about"
                className="w-full h-full object-contain"
              />

              <Link
                href={socialsLink.whitepaper}
                rel="noopener noreferrer"
                target="_blank"
                className="mx-auto mt-10"
              >
                <Button
                  colorScheme="whiteAlpha"
                  className="w-auto my-4 hover:text-primary"
                >
                  Read Our Docs
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="h-12 lg:h-24" />
      </div>
    );
  }

  return (
    <div className="homepage-container">
      <YinLoader />
    </div>
  );
};

export default Home;