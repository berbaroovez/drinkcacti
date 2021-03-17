import styled from "styled-components";
import { COLORS } from "../utils/constants";

export default function Button({ action, value, color }) {
  return (
    <ButtonWrapper action={action || "/"} color={color || COLORS.red}>
      <button type="submit" value={value}>
        {value}
      </button>
    </ButtonWrapper>
  );
}

const ButtonWrapper = styled.form`
  width: 100%;
  background: yellow;
  color: ${COLORS.pink};
  height: 38px;
  button {
    text-transform: uppercase;
    padding: 6px 8px;
    color: inherit;
    cursor: pointer;
    width: 100%;
    height: 100%;
    background: ${(props) => props.color};
    border: none;
    font-size: ${15 / 16 + "rem"};
    border-radius: ${2 / 16 + "rem"};
    &:hover {
      background: ${COLORS.redHover};
    }
    &:focus {
      background: ${COLORS.focusColor};
    }
    &:active {
      background: ${COLORS.focusColor};
    }
  }
`;
