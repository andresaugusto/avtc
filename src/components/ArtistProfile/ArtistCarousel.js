import { useState, useContext, useEffect, useRef } from "react";

import styled from "styled-components";
import { motion } from "framer-motion";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {
  PieceContext,
  PieceModalToggleContext,
} from "../../helperFunctions/avtcContext";
import { DBURL } from "../../helperFunctions/config";

//  //  //  STYLED COMPONENTS   //  //  //

const CarouselContainer = styled.div`
  overflow: hidden;
  height: 90vmin;
  width: 90vmin;
  max-height: 900px;
  max-width: 900px;
  /* background-color: pink; */

  /* border-radius: 2vmin; */
`;
const Slider1Container = styled(motion.div)`
  overflow: cover;
  /* background: rgba(255, 255, 255, 0.07); */

  height: 70vmin;
  max-height: 700px;
  max-width: 700px;

  /* border-radius: 2vmin 2vmin 0 0; */
`;

const Slider1Img = styled(motion.img)`
  max-width: 90vmin;
  overflow: contain;

  margin: 0;
  padding: 0;
  transform: translate(-50%, -50%);
  position: relative;
  left: 50%;
  top: 50%;
`;

const Slider2Container = styled(motion.div)`
  overflow: hidden;
  /* background: rgba(255, 255, 255, 0.07); */

  /* border-radius: 0 0 2vmin 2vmin; */
  height: 20vmin;
  max-height: 200px;
`;

const Slider2Img = styled(motion.img)`
  max-width: 300px;
  overflow: cover;

  margin: 0;
  padding: 0;
  transform: translate(-50%, -50%);
  position: relative;
  left: 50%;
  top: 50%;
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

export default function ArtistCarousel(props) {
  //  //  //  FETCH ARTIST ART    //  //  //

  useEffect(() => {
    fetchArtistPieces();
  }, []);

  const [artistPieces, setArtistPieces] = useState([]);
  const artistSlug = props.artistSlug;

  const fetchArtistPieces = async () => {
    const gallData = await fetch(`${DBURL}/gallery/`);
    const gall = await gallData.json();
    const rtstGall = [];

    gall.map((piece) => {
      if (piece.artist_id === artistSlug) {
        rtstGall.push(piece);
      } else {
      }
    });

    setArtistPieces(rtstGall);
  };

  //  //  //  PIECE SETTINGS    //  //  //

  const { setPiece } = useContext(PieceContext);
  const { showPiece, setShowPiece } = useContext(PieceModalToggleContext);

  const fetchPiece = async (i) => {
    const picData = await fetch(`${DBURL}/gallery/${i}`);
    const pic = await picData.json();

    setPiece({
      title: pic.title,
      slug: pic.slug,
      img: pic.art_image,
      artistSlug: pic.artist_id,
      artistName: pic.artist_name,
    });

    setShowPiece(!showPiece);
  };

  //  //  //  CAROUSEL FUNCTIONALITY  //  //  //

  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);

  const slider1 = useRef(null);
  const slider2 = useRef(null);

  useEffect(() => {
    setNav1(slider1.current);
    setNav2(slider2.current);
  });

  const settingsSlider1 = {
    fade: true,
    adaptiveHeight: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const settingsSlider2 = {
    dots: true,
    infinite: true,
    arrows: false,
  };

  return (
    <CarouselContainer>
      <div>
        <Slider
          {...settingsSlider1}
          asNavFor={nav2}
          ref={slider1}
          variants={ItemContainerAnimation}
          initial="hidden"
          animate="visible"
        >
          {artistPieces.map((i) => (
            <Slider1Container
              key={i.slug}
              variants={ItemAnimation}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
              // onClick={() => fetchPiece(i.slug)}
              onClick={console.log(i.slug)}
            >
              <Slider1Img src={i.art_image} alt={i.title} id={i.slug} />
            </Slider1Container>
          ))}
        </Slider>

        <Slider
          {...settingsSlider2}
          asNavFor={nav1}
          ref={slider2}
          slidesToShow={3}
          swipeToSlide={true}
          focusOnSelect={true}
          variants={ItemContainerAnimation}
          initial="hidden"
          animate="visible"
        >
          {artistPieces.map((i) => (
            <Slider2Container
              key={i.slug}
              variants={ItemAnimation}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
            >
              <Slider2Img src={i.art_image} alt={i.title} id={i.slug} />
            </Slider2Container>
          ))}
        </Slider>
      </div>
    </CarouselContainer>
  );
}

// export default class ArtistCarousel extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             nav1: null,
//             nav2: null
//         };
//     }

//     componentDidMount() {
//         this.setState({
//             nav1: this.slider1,
//             nav2: this.slider2
//         });
//     }

//     render() {
//         return (
//             <CarouselContainer>
//                 <h2>Our Work</h2>
//                 <h4>First Slider</h4>
//                 <Slider
//                     asNavFor={this.state.nav2}
//                     ref={slider => (this.slider1 = slider)}
//                     >
//                     <div>
//                         <h3>1</h3>
//                     </div>
//                     <div>
//                         <h3>2</h3>
//                     </div>
//                     <div>
//                         <h3>3</h3>
//                     </div>
//                     <div>
//                         <h3>4</h3>
//                     </div>
//                     <div>
//                         <h3>5</h3>
//                     </div>
//                     <div>
//                         <h3>6</h3>
//                     </div>
//                 </Slider>
//                     <h4>Second Slider</h4>
//                 <Slider
//                     asNavFor={this.state.nav1}
//                     ref={slider => (this.slider2 = slider)}
//                     slidesToShow={3}
//                     swipeToSlide={true}
//                     focusOnSelect={true}
//                     >
//                     <div>
//                         <h3>1</h3>
//                     </div>
//                     <div>
//                         <h3>2</h3>
//                     </div>
//                     <div>
//                         <h3>3</h3>
//                     </div>
//                     <div>
//                         <h3>4</h3>
//                     </div>
//                     <div>
//                         <h3>5</h3>
//                     </div>
//                     <div>
//                         <h3>6</h3>
//                     </div>
//                 </Slider>
//             </CarouselContainer>
//         );
//     }
// }
