//  //  //  DEPS   //  //  //
import styled from "styled-components";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react"

//  //  //  IMAGES  //  //  //
import StreetViewCrop from "../../media/streetViewCrop.png"

//  //  //   STYLED-COMPONENTS  //  //  //
// const Section = styled.section`
//   overflow: hidden;
//   padding: 0;
//   margin: 3vmin;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;
// const A = styled.a`
//   color: inherit;
//   text-decoration: none;
// `;
// // initialize Brute Force - Done by Eric Atwell
// // love you, my G. you're a champion

// const ContactContainer = styled.section`
//   padding: 0;
//   list-style-type: none;
//   margin-block-start: 0;
//   margin-block-end: 0;
//   margin-inline-start: 0;
//   margin-inline-end: 0;
//   padding-inline-start: 0;

//   width: 150vmin;

//   display: grid;
//   grid-template-rows: repeat(2, 40%);
//   grid-template-columns: repeat(3, 33%);
//   grid-gap: 1vmin;
//   -webkit-filter: drop-shadow(0px 2px 2px #000000);
//   filter: drop-shadow(0px 2px 2px #000000);

//   border-top: 1px solid rgba(255, 255, 255, 0.7);
//   background-color: rgba(0, 0, 0, 0.5);
//   border-radius: 20px;
// `;

const ContactContainer = styled.div`
  box-sizing: border-box;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: invert(100%) sepia(30%) hue-rotate(135deg);
`
const ContactBackground = styled.div`
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  overflow: hidden;
  position: absolute;
  background-image: url(${StreetViewCrop});
  background-position: 50% 100%;
  background-repeat: no-repeat;
  background-size: contain;
  filter: saturate(0%) invert(100%);

`
const SectionTitle = styled.div`
    width: 100vw;
    /* margin: 4vmin 0; */

    color: black;
    font-family: 'New Rocker', serif;
    /* font-family: 'Quantico', sans-serif; */
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
const ContactInfoContainer = styled.div`
  width: 50vw;
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
  font-size: 1.5vmin;
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
const ContactInfoLine = styled.div`
`
const ContactSocialsContainer = styled.div`
  width: inherit;
  max-width: 20vmin;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  grid-gap: 3vmin;
  align-items: center;
`
const ContactInfoEmailButton = styled.button`
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
  font-size: 1.5vmin;
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

//  //  //  FUNCTION    //  //  //
export default function ContactUs() {
  return (
    <>
      <ContactContainer>
        <ContactBackground/>
        <ContactInfoContainer>
          <SectionTitle>Talk to us</SectionTitle>
          <br/>
          <ContactInfoLine>American Vengeance Tattoo Co.</ContactInfoLine>
          <ContactInfoLine>4615 7th Ave.</ContactInfoLine>
          <ContactInfoLine>Kenosha, WI</ContactInfoLine>
          <ContactInfoLine>53140</ContactInfoLine>
          <br/>
          <ContactInfoLine>(262) 619-9520</ContactInfoLine>
          <br/>
          <ContactInfoLine>12:00pm - 7:00pm</ContactInfoLine>
          <br/>
          <ContactSocialsContainer>
            
            <ContactInfoEmailButton href="mailto:atwellcodes@gmail.com?subject=Website%20Contact">
              email us
            </ContactInfoEmailButton>
            <Anchor href="https://instagram.com/americanvengeance?igshid=1fzfwzmsrqqkm">
              <Icon icon="simple-icons:instagram" inline={true} width={"3.15vmin"} />
            </Anchor>
            <Anchor href="https://www.facebook.com/avtatco/">
              <Icon icon="brandico:facebook-rect" inline={true} width={"3vmin"}/>
            </Anchor>
          </ContactSocialsContainer>
        </ContactInfoContainer>
      </ContactContainer>
    </>
    // <section>
    //   <ContactTitle>Contact Us</ContactTitle>
    //   <Section>
    //     <ContactContainer>
    //       <Social>
    //         <Titles>facebook</Titles>
    //         <A
    //           className="socialMediaHandle"
    //           href="https://www.facebook.com/avtatco/"
    //         >
    //           @avtatco
    //         </A>
    //       </Social>
    //       <Social>
    //         <Titles>Email</Titles>
    //         <A
    //           className="socialMediaHandle"
    //           href="mailto:atwellcodes@gmail.com?subject=Website%20Contact"
    //         >
    //           AVTC@gmail.com
    //         </A>
    //       </Social>
    //       <Social>
    //         <Titles>instagram</Titles>
    //         <A
    //           className="socialMediaHandle"
    //           href="https://instagram.com/americanvengeance?igshid=1fzfwzmsrqqkm"
    //         >
    //           @americanvengeance
    //         </A>
    //       </Social>

    //       <Social>
    //         <Titles>Shop Hours</Titles>
    //         <SubTitles className="shop-hours-info">12:00pm - 7:00pm</SubTitles>
    //       </Social>
    //       <Social>
    //         <Titles>Location</Titles>
    //         <SubTitles className="location-info">
    //           American Vengeance Tattoo Co.
    //           <br />
    //           4615 7th Ave.
    //           <br />
    //           Kenosha, WI, 53140
    //         </SubTitles>
    //       </Social>
    //       <Social>
    //         <Titles>Main Line</Titles>
    //         <SubTitles className="main-line-info">(262) 619-9520</SubTitles>
    //       </Social>
    //     </ContactContainer>
    //   </Section>
    // </section>
  );
}
