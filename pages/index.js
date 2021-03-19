import styled from "styled-components";
import ContactForm from "../components/ContactForm";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import Ticker from "../components/Ticker";
import { COLORS } from "../utils/constants";

export default function Home() {
  return (
    <HomeWrapper>
      <CanvasContainer>
        <img src="./assets/cacti-available.png" />
      </CanvasContainer>

      <ContentContainer>
        <CTA />
        <ContactForm />
        <img className="info-images" src="./assets/cacti-info.png" />
        <img className="info-images" src="./assets/cacti-cans.png" />
        <Footer />
      </ContentContainer>

      <Ticker />
    </HomeWrapper>
  );
}

const HomeWrapper = styled.div`
  position: relative;
`;

const CanvasContainer = styled.div`
  position: relative;
  top: 34px;

  height: 78vh;
  width: 100%;

  background: url("./assets/cacti-background.jpg");
  background-position: 50% 80%;
  background-size: cover;
  background-repeat: no-repeat;
  img {
    width: 200px;
    position: absolute;
    top: 100px;
  }
  @media only screen and (min-device-width: 768px) {
    img {
      width: 300px;
    }
  }

  @media only screen and (min-device-width: 780px) {
    position: fixed;
    left: 0;
    right: 340px;
    top: 34px;
    width: auto;
    height: 100%;

    img {
      width: 400px;
    }
  }
`;

const ContentContainer = styled.div`
  position: relative;
  top: 34px;

  padding: 20px 10px;

  .info-images {
    width: 100%;
    margin-bottom: 24px;
  }

  @media only screen and (min-device-width: 780px) {
    /* For general iPad layouts */
    width: 340px;
    background: ${COLORS.pink};
    float: right;
  }
`;
