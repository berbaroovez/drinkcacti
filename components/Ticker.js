import styled, { keyframes } from "styled-components";
import { COLORS } from "../utils/constants";

export default function Ticker() {
  return (
    <TickerWrapper>
      <TickerMarquee>
        <TickerImage src="./assets/cacti-ticker.jpg" />
        <TickerImage src="./assets/cacti-ticker.jpg" />
        <TickerImage src="./assets/cacti-ticker.jpg" />
      </TickerMarquee>
    </TickerWrapper>
  );
}

const marquee_loop = keyframes`
  from {
    transform: translateX(0px);
  }

  to {
       transform: translateX(-1258px);
  }
`;
const TickerWrapper = styled.div`
  background: ${COLORS.pink};
  width: 100%;
  height: 34px;
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
`;

const TickerImage = styled.img`
  height: 28px;
  display: inline-block;
`;

const TickerMarquee = styled.div`
  white-space: nowrap;
  animation: ${marquee_loop} 14s linear infinite;
`;
