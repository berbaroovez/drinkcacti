import styled, { keyframes } from "styled-components";
import { COLORS } from "../utils/constants";
import Button from "./Buttons";
export default function CTA() {
  return (
    <CTAWrapper>
      <Button action="/buy" value="Buy Cacti" />
      <CTA__BottomRow>
        <Button action="/find" value="Find Cacti" />
        <Button action="https://shop.drinkcacti.com" value="Buy Merch" />
      </CTA__BottomRow>
    </CTAWrapper>
  );
}

const CTAWrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  gap: 2px;
  width: 100%;

  overflow: hidden;
  position: fixed;
  top: 34px;
  left: 0;
  background: ${COLORS.pink};
  padding: 2px 0;
`;

const CTA__BottomRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2px;
`;
