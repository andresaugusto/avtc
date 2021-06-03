import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { useCycle } from "framer";
import { motion } from "framer-motion";
import styled from "styled-components";

// import { PieceContext, PieceModalToggleContext } from '../../helperFunctions/avtcContext'
import { DBURL } from "../../helperFunctions/config";

//  //  //  STYLED-COMPONENTS   //  //  //

const Section = styled.section`
  overflow: hidden;
  padding: 0;
  margin: 3vmin;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ItemContainer = styled(motion.ul)`
  padding: 0;
  list-style-type: none;
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-start: 0;
  margin-inline-end: 0;
  padding-inline-start: 0;

  width: 300vmin;
  /* height: 90.009vmin; */

  /* max width 1000px will keep it same size as the gallery on full screen */

  max-width: 1000px;
  /* max-height: 1000px; */
  display: grid;
  grid-template-columns: repeat(3, 30%);
  /* grid-template-rows: repeat(2, 1fr); */
  /* grid-template-columns: repeat(auto-fill, minmax(26vmin, 1fr)); */
  justify-content: center;
  align-content: center;
  grid-gap: 1vmin;
  /* padding: 2vmin 0 2vmin 0; */
  /* background: rgba(255, 255, 255, 0.07); */
  /* background: pink; */
  /* background: linear-gradient(90deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.421), rgba(50, 50, 50, 0.421), rgba(255, 255, 255, 0.171), rgba(255, 255, 255, 0.22), rgba(255, 255, 255, 0.171), rgba(50, 50, 50, 0.421), rgba(0, 0, 0, 0.421), rgba(0, 0, 0, 0)); */
  /* border-radius: 30px; */
  -webkit-filter: drop-shadow(0px 2px 2px #000000);
  filter: drop-shadow(0px 2px 2px #000000);

  border-top: 1px solid rgba(255, 255, 255, 0.7);
  /* background-color: rgba(0, 0, 0, 0.5); */
`;

const Item = styled(motion.li)`
  /* width: 25.14433811802233vmin; */
  /* max-width: 333px; */
  /* width: 25.14433811802233vmin; */
  /* max-height: 333px; */
  /* background-color: rgba(0, 0, 0, 0.5); */
  width: 30vmin;
  height: 45vmin;
  max-width: 300px;
  max-height: 500px;
  overflow: hidden;
`;

const Img = styled(motion.img)`
  display: block;

  min-width: inherit;
  min-height: inherit;
  max-height: 30vmin;
  margin: 0;
  padding: 0;
  /* transform: translate(0%, 0%); */
  /* position: relative; */
  left: 50%;
  top: 0%;

  object-fit: cover;
  -webkit-filter: grayscale(0%);
  filter: grayscale(0%);
`;

const ItemTitle = styled.h1`
  font-size: 3vmin;
  width: 100%;
`;

const Li = styled(motion.li)`
  background-color: rgba(0, 0, 0, 0.3);
  overflow: hidden;

  border: 1px solid rgba(255, 255, 255, 0.3);
  display: grid;
  align-items: center;
  justify-content: center;
`;

const P = styled.p`
  color: rgba(255, 255, 255, 0.7);
`;

const ArtistTitle = styled.h1`
  font-size: 5vmin;
`;

//  //  //  VARIABLES   //  //  //

const ItemContainerAnimation = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 1.3,
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

export default function ArtistsPeek() {
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

  // //  //  //  PIECE SETTINGS    //  //  //

  // const { setPiece } = useContext(PieceContext)
  // const { showPiece, setShowPiece } = useContext(PieceModalToggleContext)

  // const fetchPiece = async (i) => {

  //     const picData = await fetch(`${DBURL}/gallery/${i}`)
  //     const pic = await picData.json();

  //     setPiece(
  //         {
  //             title: pic.title,
  //             slug: pic.slug,
  //             img: pic.art_image,
  //             artistSlug: pic.artist_id,
  //             artistName: pic.artist_name
  //         }
  //     )

  //     setShowPiece(!showPiece)
  // }

  //  //  //  FUNCTIONS    //  //  //

  return (
    <>
      <ArtistTitle>Resident Artists</ArtistTitle>
      <Section>
        <ItemContainer
          variants={ItemContainerAnimation}
          initial="hidden"
          animate="visible"
        >
          {artists.map((i) => (
            <Item key={i.slug} variants={ItemAnimation}>
              <ItemTitle>{i.name}</ItemTitle>
              <Link className="links" to={`/artists/${i.slug}`}>
                <Img
                  src={i.profile_image}
                  alt={i.name}
                  id={i.slug}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                />
              </Link>
            </Item>
          ))}
        </ItemContainer>
      </Section>
    </>
  );
}
