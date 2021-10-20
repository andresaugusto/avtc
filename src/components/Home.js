//  //  //  DEPS   //  //  //
import styled from "styled-components";

//  //  //  COMPONENTS  //  //  //
import Services from "./HomePage/Services";
import GalleryPeek from "./HomePage/GalleryPeek";
import ArtistCards from "./HomePage/ArtistCards";
import MerchandisePeek from "./HomePage/MerchandisePeek";
import ContactUs from "./HomePage/ContactUs";

//  //  //  IMAGES  //  //  //
import HeaderImg from "../media/AV_TC.png";

//  //  //  STYLED-COMPONENTS   //  //  //
const HomePageSection = styled.section`
	width: 100vw;
	height: 100vh;
	overflow: hidden;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`
const HomeWelcomeSection = styled.section`
	width: 100vw;
	overflow: hidden;
	background: rgba(0, 0, 0, 0.5);
	padding-bottom: 15.5vh;
`
const HomeHeader = styled.section`
	box-sizing: border-box;
	/* position: relative; */
	height: 100vh;
	width: 400vw;
	overflow: hidden;
	display: flex;
	flex-flow: column nowrap;
	justify-content: center;
	align-items: center;
	backdrop-filter: invert(100%) sepia(30%) hue-rotate(335deg);
	transform: translateY(-25vh) rotateZ(-12deg);
	transform-origin: center;
`
const HomeHeaderImg = styled.img`
	height: 50vmin;
	min-height: 150px;
	max-height: 444px;

	/* -webkit-filter: drop-shadow(0px 2px 2px #000000);
  	filter: drop-shadow(0px 2px 2px #000000); */
	-webkit-filter: invert(0%);
	filter: invert(0%);
	transform: rotateZ(12deg) translateY(+25vh);
`
const HomeWorkSection = styled.section`
	width: 100vw;
	overflow: hidden;
	backdrop-filter: invert(100%) sepia(30%) hue-rotate(335deg);
	/* background: rgba(0, 0, 0, .5); */
	padding: 10vh 0 15vh 0;
`
const HomeFooterSection = styled.section`
	width: 100%;
	overflow: hidden;
	background: rgba(0, 0, 0, .5);
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
			<MerchandisePeek id='merchandisePeek'/>
			<HomeFooterSection id='contactUs'>
				<ContactUs />
			</HomeFooterSection>
		</>
	);
}
