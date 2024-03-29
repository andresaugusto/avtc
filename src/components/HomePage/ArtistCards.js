import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import styled from "styled-components";

import { DBURL } from "../../helperFunctions/config";


// import LoadingGif from '../../media/LoadingGif.gif'

//  //  //  STYLED-COMPONENTS   //  //  //
const ArtistCardsSection = styled.section`
	overflow-y: hidden;
	overflow-x: scroll;
	display: flex;
    padding: 0 .5vmin;
    grid-gap: .6vmin;
	justify-content: center;
	align-items: center;
    /* backdrop-filter: invert(100%) sepia(30%) hue-rotate(335deg); */
`
const SectionTitle = styled.div`
    width: 19.6vw;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    color: black;
    /* font-family: 'New Rocker', serif; */
    font-family: 'Quantico', sans-serif;
    /* font-family: 'Hepta Slab', serif; */
    /* font-family: 'Oswald', sans-serif; */
    /* font-family: 'Six Caps', sans-serif; */
    font-size: 2vmin;
    letter-spacing: 1vmin;
    font-weight: 700;

	transform: rotate(-90deg) translateY(4vmin);

    @media (max-width: 600px) {
        font-size: 16px;
        letter-spacing: 2px;
        font-weight: 400;
    }
`
const ArtistCardsContainer = styled(motion.div)`
	box-sizing: border-box;
	width: 100vw;
	height: 90vh;

	display: flex;
	flex-flow: column wrap;
	grid-gap: 0.55vmin;
	justify-content: stretch;
	align-items: stretch;
`
const ArtistCard = styled(motion.div)`
	box-sizing: content-box;
	/* width: 59.25vw; */
	/* width: 39.2vw; */
	min-height: 40vh;
	overflow: hidden;

	display: flex;
	grid-gap: 0.6vmin;
    flex-flow: row nowrap;
    /* align-items: center; */
    /* justify-content: center; */
	flex-grow: 1;

	background-color: rgba(0, 0, 0, 1);
	/* transition: .05s ease-in; */
    /* backdrop-filter: invert(0%) sepia(30%) hue-rotate(335deg); */
    border: black 1px solid;

	&:hover {
		filter: invert(100%);
	}
`
const ArtistCardTitleContainer = styled.div`
	height: inherit;
	width: 9.89vw;

	display: flex;
	justify-content: center;
	align-items: center;
	/* position: absolute; */
    overflow: hidden;
`
const ArtistCardTitle = styled.div`

	/* color: black; */
    /* font-family: 'New Rocker', serif; */
    font-family: 'Quantico', sans-serif;
    /* font-family: 'Hepta Slab', serif; */
    /* font-family: 'Oswald', sans-serif; */
    /* font-family: 'Six Caps', sans-serif; */
    font-size: 1.5vmin;
    letter-spacing: .5vmin;
    font-weight: 700;
    text-align: center;
    transform: rotateZ(-90deg);
    text-transform: uppercase;

    @media (max-width: 600px) {
        font-size: 11px;
        letter-spacing: 2px;
        font-weight: 400;
    }
`
const ArtistCardImage = styled.div`
	box-sizing: border-box;
	width: 19.64vw;
	min-height: 40vh;
	overflow: hidden;

	/* display: flex;
	justify-content: stretch;
	align-items: stretch; */

	background-position: 50% 50%;
	background-size: cover;
	filter: saturate(25%);

    border-left: 1px black solid;
`

//  //  //  VARIABLES   //  //  //
const ItemContainerAnimation = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			delayChildren: 1.3,
			staggerChildren: 0.5,
		},
	},
};
const ItemAnimation = {
	hidden: { x: 20, opacity: 0 },
	visible: {
		x: 0,
		opacity: 1,
	},
};

//  //  //  FUNCTION    //  //  //
export default function ArtistCards() {

	//  //  //  DATA FETCHING FROM DB   //  //  //
	useEffect(() => {
		fetchArtists();
	}, []);

	const [artists, setArtists] = useState([]);

	const fetchArtists = async () => {
		const rtstsData = await fetch(`${DBURL}/artists`);
		const rtsts = await rtstsData.json();

		setArtists(rtsts);
	};

	//  //  //  FUNCTIONS    //  //  //
	return (
		<>
			<ArtistCardsSection>
				<ArtistCardsContainer
					variants={ItemContainerAnimation}
					initial="hidden"
					animate="visible"
                >
                    <SectionTitle>ARTISTS</SectionTitle>
					{artists.map((i) => (
                        <ArtistCard
							key={i.slug}
							variants={ItemAnimation}
                        >
                            <Link 
								className="links" 
								to={`/artists/${i.slug}`} 
								style={{ display: 'flex', justifyContent: 'stretch', alignItems: 'stretch'}}
                            >
						    	<ArtistCardTitleContainer>
                                    <ArtistCardTitle>{i.name}</ArtistCardTitle>
						    	</ArtistCardTitleContainer>
						    	<ArtistCardImage 
                                	style={{ backgroundImage: `url(${i.profile_image})` }}
                                />
						    </Link>
                        </ArtistCard>
					))}
				</ArtistCardsContainer>
			</ArtistCardsSection>
		</>
	);
}
