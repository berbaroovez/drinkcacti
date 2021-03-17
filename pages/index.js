import styled from "styled-components";
import ContactForm from "../components/ContactForm";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import Ticker from "../components/Ticker";

export default function Home() {
  return (
    <HomeWrapper>
      <CanvasContainer></CanvasContainer>

      <ContentContainer>
        <CTA />
        <ContactForm />
        <img src="./assets/cacti-info.png" />
        <img src="./assets/cacti-cans.png" />
      </ContentContainer>

      <Footer />
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
`;

const ContentContainer = styled.div`
  position: relative;
  top: 34px;

  padding: 20px 10px;

  img {
    width: 100%;
    margin-bottom: 24px;
  }
`;
