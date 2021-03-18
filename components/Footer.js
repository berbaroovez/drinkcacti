import styled from "styled-components";
import { COLORS } from "../utils/constants";

export default function Footer() {
  return (
    <FooterWrapper>
      <SocialWrapper>
        <SocialIcon href="https://www.instagram.com/cacti">
          <img src="./assets/insta.png" />
        </SocialIcon>
        <SocialIcon href="https://twitter.com/drinkcacti">
          <img src="./assets/twitter.png" />
        </SocialIcon>
        <SocialIcon href="https://www.youtube.com/c/cacti">
          <img src="./assets/youtube.png" />
        </SocialIcon>
      </SocialWrapper>
      <a href="/terms">Terms of Use</a>|<a href="/privacy">Privacy Policy</a>|
      <a href="/personal-information">Don't Sell My Personal Information</a>|
      <a href="https://buy.drinkcacti.com/pages/faq">FAQ</a>
      <p>
        Enjoy Responsibly. ©2021 Produced by Meadow Creek Beverage Co. in
        Association with Anheuser-Busch, LLC CACTI TM Agave Spiked Seltzer, IRC
        Beer (Ale in TX), St. Louis, MO Do Not Share This Content With Minors
      </p>
    </FooterWrapper>
  );
}

const FooterWrapper = styled.div`
  position: relative;
  padding: 20px 10px;

  height: 200px;
  font-size: ${10 / 16 + "rem"};
  color: ${COLORS.formBlue};
  line-height: 1.7;
  a {
    color: inherit;
  }
  p {
    margin: 10px 0;
  }
`;

const SocialWrapper = styled.div`
  width: fit-content;
  margin: 32px auto;
`;

const SocialIcon = styled.a`
  img {
    width: 20px;
    &:nth-of-type(1) {
      margin: 7px;
    }
  }
`;
