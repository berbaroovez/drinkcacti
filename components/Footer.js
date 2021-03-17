import styled from "styled-components";

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
    </FooterWrapper>
  );
}

const FooterWrapper = styled.div`
  position: relative;
  padding: 20px 10px;

  background: black;
  height: 200px;
`;

const SocialWrapper = styled.div``;

const SocialIcon = styled.a`
  img {
    width: 20px;
  }
`;
