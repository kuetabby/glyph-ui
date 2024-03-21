"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
// import { ReactTyped } from "react-typed";
// import Tilt from "react-parallax-tilt";
import { Button, List, ListItem } from "@chakra-ui/react";
// import { ArrowRightOutlined } from "@ant-design/icons";
// import { RobotIcon } from "@/utils/Icon/robot";

import YinLoader from "@/components/Loader/Custom";

import { useIsMounted } from "@/hooks/useIsMounted";

import { contractAddress, socialsLink } from "@/constants/links";
import {
  barlow,
  barlowBold,
  // syne,
  syneBold,
  syneExtraBold,
} from "@/utils/font";
import { TelegramHeaderIcon, TwitterIcon } from "@/utils/Icon/socials";
// import { ecosystemList } from "./constants/ecosystem";
// import { roadmapList } from "./constants/roadmap";

// import { FeatureArrow } from "@/utils/Icon/arrow";

// import BannerApp from "@/assets/banner-nav.png";

// import RedTokenomic from "@/assets/tokenomic-red.png";
// import BlueTokenomic from "@/assets/tokenomic-blue.png";
// import GreenTokenomic from "@/assets/tokenomic-green.png";

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

// const introVidUrl =
//   "https://res.cloudinary.com/dwppcshmi/video/upload/f_auto:video,q_auto/v1/rabbit_images/y1tkrs3vpz3mvpocct6p";

const Home: React.FC<Props> = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  // const [isWelcomeVisible, setIsWelcomeVisible] = useState(false);
  // const [isFeaturesVisible, setIsFeaturesVisible] = useState(false);
  const [isAboutVisible, setIsAboutVisible] = useState(false);
  // const [isTokensVisible, setIsTokensVisible] = useState(false);

  // const welcomeRef = useRef<HTMLDivElement | null>(null);
  // const featuresRef = useRef<HTMLDivElement | null>(null);
  // const aboutRef = useRef<HTMLDivElement | null>(null);
  // const tokensRef = useRef<HTMLDivElement | null>(null);

  const isMounted = useIsMounted();
  // const [copyContent] = useCopyText();

  useEffect(() => {
    if (isMounted) {
      const timeOut = setTimeout(() => {
        setIsLoaded(true);
      }, 2000);

      return () => clearTimeout(timeOut);
    }
  }, [isMounted, isLoaded]);

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

  if (isMounted && isLoaded) {
    return (
      <div className="homepage-container">
        {/* <div className="h-20" /> */}
        <div
          id="welcome"
          className="h-[7em] lg:h-[8em] xl:h-[9em] relative z-30"
        />
        <div className="welcome-container">
          <div className="welcome-wrapper">
            <div className="w-full md:w-1/2 md:hidden text-center">
              <h1
                className={`${syneBold.className} !font-bold text-4xl xs:text-5xl sm:text-6xl`}
              >
                GENERATE
              </h1>
              <h2
                className={`${syneExtraBold.className} !font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl my-4 md:my-6`}
              >
                YOUR AUDIO OR VIDEO TO TEXT
              </h2>
            </div>

            <div className="w-full sm:w-4/5 md:w-[47.5%] h-[400px] sm:h-full xl:h-[500px] m-auto">
              <Image
                src={HeaderLogo}
                alt="header"
                className="w-full h-full lg:object-contain"
              />
            </div>

            <div className="w-full md:w-1/2 text-center md:text-left">
              <h1
                className={`${syneBold.className} hidden md:block !font-bold text-4xl sm:text-5xl lg:text-7xl`}
              >
                GENERATE
              </h1>
              <h2
                className={`${syneExtraBold.className} hidden md:block !font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl my-4 md:my-6`}
              >
                YOUR AUDIO OR VIDEO TO TEXT
              </h2>
              <div
                className={`w-11/12 text-[#FFFFFFCC] ${barlow.className} text-base mx-auto md:mx-0`}
              >
                Pioneering Artificial Intelligence (AI) platform designed to
                transform the way we create and consume digital content
              </div>

              <div className="flex flex-wrap justify-center md:justify-normal gap-4 mt-4">
                <Link
                  href={socialsLink.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    className="socials-header"
                    leftIcon={
                      <TelegramHeaderIcon className="socials-headers-icon" />
                    }
                  >
                    Telegram
                  </Button>
                </Link>

                <Link
                  href={socialsLink.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    className="socials-header"
                    leftIcon={<TwitterIcon className="socials-header-icon" />}
                  >
                    Twitter
                  </Button>
                </Link>
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
          <div className="w-11/12 sm:w-2/5 lg:w-[30%] h-[400px] bg-card border border-[#fff] rounded-2xl p-4 text-center relative">
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
                This feature harnesses sophisticated AI to understand and
                visualize the essence of the text, transforming it into
                engaging, animated visuals
              </div>
            </div>
          </div>

          <div className="w-11/12 sm:w-2/5 lg:w-[30%] h-[400px] bg-card border border-[#fff] rounded-2xl p-4 text-center relative">
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
                Innovative feature that seamlessly transforms written text into
                natural-sounding spoken words, leveraging the latest
                advancements in AI and speech synthesis technology
              </div>
            </div>
          </div>

          <div className="w-11/12 sm:w-2/5 lg:w-[30%] h-[400px] bg-card border border-[#fff] rounded-2xl p-4 text-center relative">
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
                Innovative feature that leverages advanced AI to interpret and
                visualize text, creating engaging videos complete with
                animations, images, and narration
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
                By leveraging advanced AI algorithms, Glyph AI has introduced a
                series of revolutionary tools that convert simple text inputs
                into various multimedia formats. The platform's Text to GIF
                feature allows users to generate custom animated GIFs by merely
                typing out a description, making it a fantastic tool for social
                media enthusiasts and digital marketers seeking to add a visual
                punch to their content. In addition to this, Glyph AI's Text to
                Audio capability enables the conversion of written text into
                natural-sounding audio, which is immensely beneficial for
                creating podcasts, audiobooks, or providing accessibility
                features for those with visual impairments
              </div>
            </div>

            <div className="w-full xs:w-2/3 sm:w-1/2 lg:w-2/5 h-full my-14 mx-auto">
              <div className={`w-full text-[#DEDEDE] ${barlow.className}`}>
                Lastly, the Text to Video feature is particularly
                groundbreaking, as it allows users to create engaging video
                content from textual descriptions, drastically reducing the time
                and resources typically required for video production. This
                makes Glyph AI not just a tool, but a transformative force in
                digital media, enabling creators to bring their ideas to life
                with unprecedented ease and speed
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
                href={socialsLink.bot}
                rel="noopener noreferrer"
                target="_blank"
                className="mx-auto mt-10"
              >
                <Button
                  colorScheme="whiteAlpha"
                  className="w-auto my-4 hover:text-primary"
                >
                  Start Now
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
