//  //  //  FUNCTIONALITY   //  //  //

import styled from "styled-components";
import { motion } from "framer-motion";

//  //  //   STYLED-COMPONENTS  //  //  //

const Section = styled.section`
  overflow: hidden;
  padding: 0;
  margin: 3vmin;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const A = styled.a`
  color: inherit;
  text-decoration: none;
`;

// initialize Brute Force - Done by Eric Atwell

const ContactContainer = styled.section`
  padding: 0;
  list-style-type: none;
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-start: 0;
  margin-inline-end: 0;
  padding-inline-start: 0;

  width: 150vmin;

  display: grid;
  grid-template-rows: repeat(2, 40%);
  grid-template-columns: repeat(3, 33%);
  grid-gap: 1vmin;
  -webkit-filter: drop-shadow(0px 2px 2px #000000);
  filter: drop-shadow(0px 2px 2px #000000);

  border-top: 1px solid rgba(255, 255, 255, 0.7);
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 20px;
`;

const Social = styled.section`
  font-size: 2vmin;
  padding-top: 2vmin;
`;

const Hours = styled.section`
  font-size: 2vmin;
  grid-row: 2;
`;
const Phone = styled.section`
  font-size: 2vmin;
  grid-row: 2;
`;

const Location = styled.section`
  font-size: 2vmin;
  grid-row: 2;
  grid-column: 2;
`;

const Titles = styled.h1`
  font-size: 3vmin;
  margin: 0;
  color: rgba(255, 255, 255, 0.5);
`;

const SubTitles = styled.p`
  margin: 0;
  padding-bottom: 8vmin;
`;

const ContactTitle = styled.h1`
  font-size: 3vmin;
`;
//  //  //  FUNCTION    //  //  //

export default function ContactUs() {
  return (
    <section>
      <ContactTitle>Contact Us</ContactTitle>
      <Section>
        <ContactContainer>
          <Social>
            <Titles>facebook</Titles>
            <A
              className="socialMediaHandle"
              href="https://www.facebook.com/avtatco/"
            >
              @avtatco
            </A>
          </Social>
          <Social>
            <Titles>Email</Titles>
            <A
              className="socialMediaHandle"
              href="mailto:atwellcodes@gmail.com?subject=Website%20Contact"
            >
              AVTC@gmail.com
            </A>
          </Social>
          <Social>
            <Titles>instagram</Titles>
            <A
              className="socialMediaHandle"
              href="https://instagram.com/americanvengeance?igshid=1fzfwzmsrqqkm"
            >
              @americanvengeance
            </A>
          </Social>

          <Social>
            <Titles>Shop Hours</Titles>
            <SubTitles className="shop-hours-info">12:00pm - 7:00pm</SubTitles>
          </Social>
          <Social>
            <Titles>Location</Titles>
            <SubTitles className="location-info">
              American Vengeance Tattoo Co.
              <br />
              4615 7th Ave.
              <br />
              Kenosha, WI, 53140
            </SubTitles>
          </Social>
          <Social>
            <Titles>Main Line</Titles>
            <SubTitles className="main-line-info">(262) 619-9520</SubTitles>
          </Social>
        </ContactContainer>
      </Section>
    </section>
  );
}
