//  //  //  FUNCTIONALITY   //  //  //

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

//  //  //  COMPONENTS  //  //  //
import Services from "./HomePage/Services";
import GalleryPeek from "./HomePage/GalleryPeek";
import ArtistCards from "./HomePage/ArtistCards";
import MerchandisePeek from "./HomePage/MerchandisePeek";
import ContactUs from "./HomePage/ContactUs";

//  //  //  IMAGES  //  //  //
import HeaderImg from "../media/AV_TC.png";
import streetViewCrop from "../media/streetViewCrop.png";

//  //  //  STYLED-COMPONENTS   //  //  //
const HomePageSection = styled(motion.section)`
	width: 100vw;
	height: 100vh;
	overflow: hidden;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const HomeWelcomeSection = styled(motion.section)`
	width: 100vw;
	overflow: hidden;
	background: rgba(0, 0, 0, 0.5);
	padding-bottom: 15.5vh;
`;

const HomeHeader = styled(motion.section)`
	backdrop-filter: invert(100%) sepia(30%) hue-rotate(335deg);
	box-sizing: border-box;
	/* position: relative; */
	height: 100vh;
	width: 400vw;
	overflow: hidden;
	display: flex;
	flex-flow: column nowrap;
	justify-content: center;
	align-items: center;
	transform: translateY(-25vh) rotateZ(-12deg);
	transform-origin: center;
`;

const HomeHeaderImg = styled.img`
	height: 50vmin;
	min-height: 150px;
	max-height: 444px;

	/* -webkit-filter: drop-shadow(0px 2px 2px #000000);
  	filter: drop-shadow(0px 2px 2px #000000); */
	-webkit-filter: invert(0%);
	filter: invert(0%);
	transform: rotateZ(12deg) translateY(+25vh);
`;

const HomeWorkSection = styled(motion.section)`
	width: 100vw;
	overflow: hidden;
	backdrop-filter: invert(100%) sepia(30%) hue-rotate(335deg);
	/* background: rgba(0, 0, 0, .5); */
	padding: 10vh 0 15vh 0;
`;

const HomeFooterSection = styled(motion.section)`
	width: 100%;
	overflow: hidden;
	background: rgba(0, 0, 0, .5);
	padding-bottom: 15.5vh;
`;

const HomeFooter = styled(motion.section)`
	
	box-sizing: border-box;
	height: 100vh;
	width: 100vw;
	overflow: hidden;
	
	display: flex;
	flex-flow: column nowrap;
	justify-content: center;
	align-items: center;

	background-image: url(${streetViewCrop});
	backdrop-filter: invert(100%) sepia(30%) hue-rotate(335deg);
	
	transform-origin: center;
	transform: translateY(25vh) rotateZ(12deg);

`

const BottomBGImg = styled(motion.img)`

	z-index: 0;
	width: 100vw;

	margin: 0;
	padding: 0;
	/* -webkit-transform: translate(-50%, 0%); */
	position: relative;
	/* top: -100%; */
	left: 50%;

	/* -webkit-filter: drop-shadow(0px 2px 2px #000000); */
	/* filter: drop-shadow(0px 2px 2px #000000); */
	-webkit-filter: invert(100%);
	filter: invert(100%);
`

//  //  //  FUNCTION    //  //  //
export default function Home() {

	//  //  //  CONSTS  //  //  //
	// const [scrollPositionY, setScrollPositionY] = useState(0);

	//  //  //  RETURN  //  //  //
	return (
		<>
			<HomeWelcomeSection id='avtc'>
				<HomePageSection>
					<HomeHeader>
						<HomeHeaderImg
							id="HomeHeaderImg"
							src={HeaderImg}
							alt="AMERICAN VENGEANCE TATTOO CO."
						/>
					</HomeHeader>
				</HomePageSection>
				<Services id='services'/>
			</HomeWelcomeSection>
			<HomeWorkSection>
				<GalleryPeek/>
				<ArtistCards id='#artistCards'/>
			</HomeWorkSection>
			<HomeFooterSection>
				<MerchandisePeek id='merchandisePeek'/>
				<HomeFooter id='contactUs'>
					<ContactUs />
				</HomeFooter>
			</HomeFooterSection>
		</>
	);
}
