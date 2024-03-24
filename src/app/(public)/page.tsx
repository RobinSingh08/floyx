"use client"
import { CommentsCards } from '../../components/home/components/Animations/CommentsCard/cards'
import type { NextPage, ResolvingMetadata } from "next";
import { Button } from "@mui/material";
import AboutUs from "../../components/home/components/AboutUs";
import styled from '@emotion/styled';
import NavBar from "../../components/home/components/navBar";
import Description from "../../components/home/components/description";
import ArticleContainer from "../../components/home/components/articleContainer";
import PodCastsContainer from "../../components/home/components/podcastContainer";
import ChatContainer from "../../components/home/components/chatContainer";
import Group from "../../components/home/components/formLayout";
import DownloadApp from "../../components/home/components/downloadNow";
import MarketPlaceContainer from "../../components/home/components/MarketPlace";
import RegisterContainer from "../../components/home/components/registerContainer";
import Footer from "../../components/home/components/frame-groups";
import { TypingAnimation } from "../../components/home/components/Animations/TypingAnimations"

import VideoContainer from "../../components/home/components/videoContainer";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
type Props = {
  params: { userName: string; articlePublicUrl: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

const MainContainerBg1 = styled.img`
  width: 1717.6px;
  height: 1606.5px;
  position: absolute;
  margin: 0 !important;
  bottom: 4013.5px;
  left: -166px;
  object-fit: contain;
`;
const MainContainerBg2 = styled.img`
  width: 1045.9px;
  height: 1042.4px;
  position: absolute;
  margin: 0 !important;
  top: 2662px;
  right: -590.9px;
  object-fit: contain;
`;
const LinkImage = styled.img`
  z-index: 34;
    filter: brightness(62%);
    position: absolute;
    top: 1258.5px;
    left: -225px;
    width: 700.8px;
    height: 871.5px;
    object-fit: contain;
    
    transform: scaleX(-1);
`;
const LinkItemImage = styled.img`
  position: absolute;
  top: 0px;
  left: -78px;
  width: 1690.7px;
  height: 1734.1px;
  object-fit: contain;
  z-index: 1;
`;
const ImageWrapper = styled.section`
  width: 100%;
  height: 2336px;
  position: absolute;
  margin: 0 !important;
  top: 27px;
  right: 0px;
  left: 0px;
`;
const ClippedIcon = styled.img`
  width: 372.6px;
  height: 4654px;
  position: relative;
  display: none;
  max-width: 100%;
  z-index: 4;
`;
const GapingContainer = styled.div`
  width: 270.5px;
  height: 594.3px;
  position: relative;
  border-radius: 50%;
  background-color: #ffad0e;
  filter: blur(280.69px);
  display: none;
  z-index: 5;
`;
const GradiantContainerBg = styled.div`
  width: 270.5px;
  height: 594.3px;
  position: relative;
  border-radius: 50%;
  background-color: rgba(255, 173, 14, 0.69);
  filter: blur(280.69px);
  display: none;
  z-index: 6;
`;
const FrameContainerBg = styled.div`
  width: 561px;
  display: none;
  max-width: 100%;
  z-index: 7;
`;
const BoxContainerBg = styled.div`
  width: 628px;
  height: 110.6px;
  position: relative;
  border-radius: 10px;
  background-color: #0b081f;
  border: 1px solid rgba(255, 255, 255, 0.15);
  box-sizing: border-box;
  display: none;
  max-width: 100%;
  z-index: 8;
`;
const GradiantContainerBg2 = styled.div`
  width: 311px;
  height: 35px;
  position: relative;
  background: linear-gradient(
    90deg,
    rgba(164, 98, 255, 0.4),
    rgba(138, 135, 255, 0.4) 54.69%,
    rgba(93, 150, 255, 0.4)
  );
  filter: blur(30px);
  display: none;
  z-index: 9;
`;
const NavBarContainer = styled.section`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  padding: 0px 0px 36.60000000000037px;
  box-sizing: border-box;
  gap: 45px 0px;
  max-width: 100%;
  @media screen and (max-width: 800px) {
    gap: 22px 0px;
  }
`;



const FrameParent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 40px 0px;
  max-width: 100%;
  font-size: 14px;
  color: #ffedec;
  font-family: Inter;
  @media screen and (max-width: 800px) {
    gap: 20px 0px;
  }
`;


const TextContainer2 = styled.div`
  width: 1318px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 14.099999999999907px 20px;
  box-sizing: border-box;
  max-width: 100%;
`;


const TextFrame = styled.section`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  padding: 0px 0px 46px;
  box-sizing: border-box;
  gap: 57px 0px;
  max-width: 100%;
  text-align: center;
  font-size: 18px;
  color: rgba(255, 255, 255, 0.7);
  font-family: Poppins;
  // @media screen and (max-width: 1350px) {
  //   padding-bottom: 20px;
  //   box-sizing: border-box;
  // }
  // @media screen and (max-width: 800px) {
  //   gap: 28px 0px;
  // }
`;
const MainContainer = styled.div`
  width: 100%;
  position: relative;
  background-color: #080617;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 89px 0px;
  letter-spacing: normal;
  text-align: center;
  font-size: 50px;
  color: #fff;
  font-family: Poppins;
  @media screen and (max-width: 800px) {
    gap: 44px 0px;
  }
  @media screen and (max-width: 450px) {
    gap: 22px 0px;
  }
`;


const Home = () => {
  return (
   
    <MainContainer>
      {/* <AboutUs /> */}

      <MainContainerBg1 alt="" src="/group-342@2x.png" />
      {/* <MainContainerBg2 alt="" src="/group-340@2x.png" /> */}
      <ImageWrapper>
        <LinkImage alt="" src="/gradientBg.png" />
        <LinkItemImage alt="" src="/group-338@2x.png" />
      </ImageWrapper>
      <ClippedIcon alt="" src="/clipped.svg" />
      <GapingContainer />
      <GradiantContainerBg />
      <FrameContainerBg />
      <BoxContainerBg />
      <GradiantContainerBg2 />
      <NavBarContainer>
        <NavBar />
       <TypingAnimation/>
        <Description />
      </NavBarContainer>
      <CommentsCards />   
      <ArticleContainer />
      <VideoContainer/>
      <PodCastsContainer />
        <ChatContainer />
          <Group />
          <DownloadApp />
        <MarketPlaceContainer />     
      <RegisterContainer />
      <AboutUs/>
      <Footer />
    </MainContainer>
  );
};

// export async function generateMetadata(): Promise<Metadata> {
  
//   return {
//     title: 'Floyx Decentralized',
//     openGraph: {
//       images: ['/'],
//     },
//     generator: 'Next.js',
//     applicationName: 'Floyx',
//     referrer: 'origin-when-cross-origin',
//     keywords: [],
//     authors: [
//       {
//         name: 'FLoyx',
//         url: "/",
//       },
//     ],
//     creator: 'Floyx creator',
//     publisher: 'Floyx publisher',
//     alternates: {
//       canonical: '/',
//       languages: {
//         'en-US': '/en-US',
//       },
//     },
    
//   };
// }

export default Home;