import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import styled from "styled-components";
import { LoremIpsum } from "react-lorem-ipsum";

import ArtistCarousel from "./ArtistProfile/ArtistCarousel";

import {
  PieceContext,
  PieceModalToggleContext,
} from "../helperFunctions/avtcContext";
import { DBURL } from "../helperFunctions/config";

import bottom_bg_img from "../media/streetViewCrop.png";
import iconInstagram from "../media/iconInstagram.png";
import iconFacebook from "../media/iconFacebook.png";
import iconCalendar from "../media/iconCalendar.png";

//Page where artist profile is composed

//  //  //  STYLEC COMPONENTS   //  //  //
const ArtistProfileContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: rgba(255, 255, 255, 0.7);
`;
const BottomBGImg = styled(motion.img)`
  z-index: -90;

  /* display: block;
    margin-left: auto;
    margin-right: auto; */
  width: 100vw;
  max-width: 1000px;

  margin: 0;
  padding: 0;
  transform: translate(-50%, -100%);
  position: absolute;
  left: 50%;
  top: 100%;

  -webkit-filter: drop-shadow(0px 2px 2px #000000);
  filter: drop-shadow(0px 2px 2px #000000);
`;
const ArtistImgContainer = styled.div`
  z-index: -10;

  /* margin-top: 30vmin; */
  min-width: 70vmin;
  min-height: 70vmin;
  /* max-width: 70vmin; */

  margin: 0;
  padding: 0;
  transform: translate(-50%, -50%);
  position: fixed;
  left: 50%;
  top: 45%;

  border-radius: 50%;
  overflow: hidden;

  border: 2px solid rgba(255, 255, 255, 0.7);
  /* border: 2px solid rgba(20, 195, 255, 1); */
`;
const ArtistImg = styled.img`
  display: block;

  min-width: inherit;
  min-height: inherit;
  max-height: 130vmin;
  object-fit: cover;

  margin: 0;
  padding: 0;
  transform: translate(-50%, 0%);
  position: absolute;
  left: 50%;
  top: 0%;
`;
const ArtistInfoContainer = styled.div`
  /* margin-top: 90vh; */

  margin: 0;
  padding: 0;
  transform: translate(-50%, -0%);
  position: absolute;
  left: 50%;
  top: 90%;

  padding-top: 10vh;
  width: 100vw;
  display: flex;
  justify-items: center;
  align-items: start;

  /* background: rgba(90, 90, 90, 0.7); */

  border-radius: .5vmin .5vmin 0 0;

  /* -webkit-filter: drop-shadow(0px -2px 2px rgba(0, 0, 0, 0.6));
  filter: drop-shadow(0px -2px 2px rgba(0, 0, 0, 0.6)); */

  backdrop-filter: blur(.5vmin) contrast(65%) invert(100%) sepia(30%) hue-rotate(135deg);
  /* border: 2px solid rgba(255, 255, 255, 1); */
`;
const ArtistName = styled.h1`
  z-index: +5;
  
  margin: 0;
  padding: 0;
  transform: translate(-50%, -50%);
  position: absolute;
  left: 50%;
  top: 95%;

  font-size: 3vh;
  color: rgba(255, 255, 255, 0.7);
  text-transform: uppercase;

  color: black;
  font-family: 'New Rocker', serif;
  /* font-family: 'Quantico', sans-serif; */
  /* font-family: 'Hepta Slab', serif; */
  /* font-family: 'Oswald', sans-serif; */
  /* font-family: 'Six Caps', sans-serif; */
  font-size: 3vmin;
  letter-spacing: .5vmin;
  font-weight: 400;

  @media (max-width: 600px) {
      font-size: 16px;
      letter-spacing: 2px;
      font-weight: 400;
  }
`;
const CarouselContainer = styled(motion.div)`
  min-height: 95vh;
  height: 95vh;
  width: 99vw;
  overflow: hidden;
  /* padding: 10vh 0; */
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, .8);
`;
// const InfoSection = styled.div`
//   margin: 5vmin 5vmin 0 5vmin;
//   font-size: 3vmin;
// `;
// const InfoSectionTitle = styled.div`
//   text-transform: uppercase;
//   font-size: 4vmin;
// `;
// const JobTitle = styled.h1`
//   margin: 0;
//   padding: 2vmin;
//   font-size: 3vmin;

//   border-top: 1px solid rgba(255, 255, 255, 0.7);
// `;
// const Specialty = styled.h1`
//   /* font-size: 2vh; */
//   font-size: 3vmin;
// `;
// const SocialMediaContainer = styled(motion.ul)`
//   list-style: none;
//   margin-block-start: 0;
//   margin-block-end: 0;
//   margin-inline-start: 0;
//   margin-inline-end: 0;
//   padding-inline-start: 0;

//   width: inherit;
//   /* border-top: 1px solid rgba(255, 255, 255, 0.7); */
//   /* border-bottom: 1px solid rgba(255, 255, 255, 0.7); */
//   display: grid;

//   grid-template-columns: repeat(2, 1fr);
//   gap: 10vmin;
//   margin: 2vmin;
// `;
// const SocialMediaItem = styled(motion.li)`
//   overflow: hidden;

//   display: grid;
//   justify-items: center;
//   align-items: center;
// `;
// const SocialMediaIcon = styled(motion.img)`
//   height: 40%;
//   max-height: 100px;

//   -webkit-filter: opacity(80%);
//   filter: opacity(80%);
// `;
// const SocialMediaTitle = styled.h1`
//   /* max-width: 15vmin; */
//   font-size: 15px;
//   color: rgba(255, 255, 255, 0.7);
// `;
// const ScheduleButton = styled(motion.div)`
//   cursor: pointer;
//   box-sizing: padding-box;
//   margin-block-start: 0;
//   margin-block-end: 0;

//   /* color: rgba(90, 90, 90, 1); */
//   text-transform: uppercase;
//   /* font-size: 5vmin; */
//   /* font-weight: 400; */
//   /* background-color: rgba(255, 255, 255, 0.7); */
//   /* background-color: rgba(90, 90, 90, 0.7); */
//   /* line-height: 11vmin; */
//   /* display: inline-block; */
//   padding: 6vmin;
//   /* width: 100%; */
//   letter-spacing: 0.5vmin;
//   border: 1px solid rgba(255, 255, 255, 0.7);
//   border-radius: 2vmin;

//   -webkit-filter: drop-shadow(0px 5px 2px rgba(0, 0, 0, 0.6));
//   filter: drop-shadow(0px 5px 2px rgba(0, 0, 0, 0.6));
// `;
// const BotttomSpacing = styled.div`
//   margin: 0;
//   padding: 0;
//   margin-top: 50vmin;
// `;

//  //  //  VARIABLES   //  //  //

const SectionTitle = styled.div`
    width: 100vw;
    /* margin: 4vmin 0; */

    color: black;
    /* font-family: 'New Rocker', serif; */
    font-family: 'Quantico', sans-serif;
    /* font-family: 'Hepta Slab', serif; */
    /* font-family: 'Oswald', sans-serif; */
    /* font-family: 'Six Caps', sans-serif; */
    font-size: 2vmin;
    letter-spacing: 1vmin;
    font-weight: 700;

    @media (max-width: 600px) {
        font-size: 16px;
        letter-spacing: 2px;
        font-weight: 400;
    }
`
const ArtistProfileDataContainer = styled.div`
  min-width: 50vw;

  z-index: +1;
  margin-bottom: 25vw;

  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  
  color: black;
  /* font-family: 'New Rocker', serif; */
  font-family: 'Quantico', sans-serif;
  /* font-family: 'Hepta Slab', serif; */
  /* font-family: 'Oswald', sans-serif; */
  /* font-family: 'Six Caps', sans-serif; */
  font-size: 1.25vmin;
  letter-spacing: .5vmin;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;

  @media (max-width: 600px) {
      font-size: 11px;
      letter-spacing: 2px;
      font-weight: 400;
  }
`
const ArtistProfileLine = styled.div`
`
const ContactSocialsContainer = styled.div`
  width: inherit;
  width: 20vmin;
  min-width: 80px;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  grid-gap: 3vmin;
  align-items: center;
`
const ArtistProfileEmailButton = styled.a`
  width: inherit;
  padding: .5vmin 1vmin;
  background-color: transparent;
  border: 2px solid;
  border-radius: .5vmin;

  color: black;
  /* font-family: 'New Rocker', serif; */
  font-family: 'Quantico', sans-serif;
  /* font-family: 'Hepta Slab', serif; */
  /* font-family: 'Oswald', sans-serif; */
  /* font-family: 'Six Caps', sans-serif; */
  font-size: 1.25vmin;
  letter-spacing: .5vmin;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;

  @media (max-width: 600px) {
      font-size: 11px;
      letter-spacing: 2px;
      font-weight: 400;
  }

`
const Anchor = styled.a`
`

//  //  //  MOTION ANIMATIONS //  //  //
const ItemContainerAnimation = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.7,
      staggerChildren: 0.5,
    },
  },
};
const ItemAnimation = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

//  //  //  FUNCTION    //  //  //
export default function ArtistProfile({ match }) {

  //  //  //  SCROLL TO TOP   //  //  //
  function ScrollToTopOnMount() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

    return null;
  }

  //  //  //  DATA FETCHING FROM DB   //  //  //
  useEffect(() => { fetchArtistInfo() }, []);
  const [artist, setArtist] = useState([]);
  const fetchArtistInfo = async () => {
    const rtstData = await fetch(`${DBURL}/artists/${match.params.artistSlug}`);
    const rtst = await rtstData.json();
    setArtist(rtst);
  };

  //  //  //  PIECE SETTINGS    //  //  //
  const { piece, setPiece } = useContext(PieceContext);
  const { showPiece, setShowPiece } = useContext(PieceModalToggleContext);
  const fetchPiece = async (i) => {
    const picData = await fetch(`${DBURL}/characters/${i}`);
    const pic = await picData.json();

    setPiece({
      name: pic[0].name,
      img: pic[0].img,
      id: pic[0].char_id,
    });
    setShowPiece(!showPiece);
  };

  //  //  //  CONTACT //  //  //
  const contactArtist = [
    [iconCalendar, "Book Now"],
    [iconInstagram, "Instagram", artist.instagram],
    [iconFacebook, "Facebook", artist.facebook],
  ];

  //  //  //  FUNCTIONS    //  //  //

  return (
    <div>
      <ScrollToTopOnMount />
      <ArtistProfileContainer>
        <ArtistImgContainer>
          <ArtistImg src={artist.profile_image} />
        </ArtistImgContainer>

        <ArtistName>{artist.name}</ArtistName>
      <ArtistInfoContainer>
        <ArtistProfileDataContainer>
          <SectionTitle>{artist.job_title}</SectionTitle>
          <br/>
          <br/>
          <br/>
          <CarouselContainer>
            <ArtistCarousel artistSlug={match.params.artistSlug} />
          </CarouselContainer>
          <br/>
          <br/>
          <br/>
          <SectionTitle>specialties</SectionTitle>
          <br/>
          {artist.specialty_one ? (
            <ArtistProfileLine>{artist.specialty_one}</ArtistProfileLine>
          ) : null}
          {artist.specialty_two ? (
            <ArtistProfileLine>{artist.specialty_two}</ArtistProfileLine>
          ) : null}
          {artist.specialty_three ? (
            <ArtistProfileLine>{artist.specialty_three}</ArtistProfileLine>
          ) : null}
          <br/>
          <br/>
          {artist.bio ? <p style={{maxWidth: '95vw'}}>"------<br/>{artist.bio}<br/>------"</p> : null}





        </ArtistProfileDataContainer>
      </ArtistInfoContainer>

        {/* <ArtistInfoContainer>
          <>{<JobTitle>{artist.job_title}</JobTitle>}</>

          <InfoSection></InfoSection>
          <ArtistCarousel artistSlug={match.params.artistSlug} />

          <InfoSection>
            <br />
            <br />
            <InfoSectionTitle>Specialties:</InfoSectionTitle>

            {artist.specialty_one ? (
              <Specialty>{artist.specialty_one}</Specialty>
            ) : null}
            {artist.specialty_two ? (
              <Specialty>{artist.specialty_two}</Specialty>
            ) : null}
            {artist.specialty_three ? (
              <Specialty>{artist.specialty_three}</Specialty>
            ) : null}
          </InfoSection>

          <InfoSection>
            {artist.bio ? <p>{artist.bio}</p> : null}
          </InfoSection>

          <InfoSection>
            <br />
            <br />
            <br />
            <a href="">
              <ScheduleButton
                role="button"
                aria-pressed="false"
                tabindex="3"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.08 }}
                onClick={null}
              >
                Schedule a Consultation
              </ScheduleButton>
            </a>
          </InfoSection>

          <InfoSection>
            <br />
            <br />
            <br />
            <br />
            <SocialMediaContainer
              variants={ItemContainerAnimation}
              initial="hidden"
              animate="visible"
            >
              {contactArtist.slice(1, 3).map((i) => (
                <a href={i[2]}>
                  <SocialMediaItem
                    key={i[0]}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.08 }}
                  >
                    <SocialMediaIcon src={i[0]} alt={i[0]} id={i[0]} />
                  </SocialMediaItem>
                </a>
              ))}
            </SocialMediaContainer>
          </InfoSection>

          <BotttomSpacing />

          <BottomBGImg src={bottom_bg_img} />
        </ArtistInfoContainer> */}
        
      </ArtistProfileContainer>
    </div>
  );
}
