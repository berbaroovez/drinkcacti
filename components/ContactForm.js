import styled from "styled-components";
import { COLORS } from "../utils/constants";
import Button from "./Buttons";

export default function ContactForm() {
  return (
    <ContactFormWrapper>
      <img src="./assets/ENTERINFOFORUPDATES.png" />
      <input type="text" placeholder="FIRST NAME" />
      <input type="text" placeholder="LAST NAME" />
      <BirthdayWrapper>
        <select>
          <option selected="" value="">
            MONTH
          </option>
          <option value="1">JANUARY</option>
          <option value="2">FEBRUARY</option>
          <option value="3">MARCH</option>
          <option value="4">APRIL</option>
          <option value="5">MAY</option>
          <option value="6">JUNE</option>
          <option value="7">JULY</option>
          <option value="8">AUGUST</option>
          <option value="9">SEPTEMBER</option>
          <option value="10">OCTOBER</option>
          <option value="11">NOVEMBER</option>
          <option value="12">DECEMBER</option>
        </select>
        <input type="number" placeholder="DAY" />
        <input type="number" className="year" placeholder="YEAR" />
      </BirthdayWrapper>
      <input type="number" placeholder="ZIP CODE" />
      <input type="email" placeholder="EMAIL" />
      <input type="checkbox" id="checkbox" name="checkbox" />
      <label for="checkbox">
        Yes, I consent to CACTI and its affiliates using my personal information
        to provide me with product and marketing information by email and other
        electronic means, and I have read and agree to the CACTI{" "}
        <a href="https://drinkcacti.com/terms">Terms of Use</a> and{" "}
        <a href="https://drinkcacti.com/privacy">Privacy Policy</a>.
      </label>

      <Button color={COLORS.formBlue} value="SIGN UP" />
    </ContactFormWrapper>
  );
}

const ContactFormWrapper = styled.form`
  input[type="number"] {
    -moz-appearance: textfield;
  }
  width: 100%;

  img {
    width: 100%;
  }
  input {
    height: 38px;
    width: 100%;
    margin: 0 auto 6px;
    background: ${COLORS.formBlue};
    color: inherit;
    border: none;
    padding: 6px 8px;
    border-radius: ${2 / 16 + "rem"};
  }

  font-size: ${15 / 16 + "rem"};
  color: ${COLORS.pink};

  input[type="checkbox"] {
    width: auto;
    appearance: none;
    background-clip: border-box;
    background-color: ${COLORS.pink};
    border: 2px solid #376071;
    border-radius: ${2 / 16 + "rem"};

    font-family: Akkurat-Mono, Helvetica, arial;

    position: relative;
    bottom: -8px;
    height: 18px;
    width: 18px;
  }
  label {
    padding-left: 16px;
    color: ${COLORS.blueText};
    font-size: ${11 / 16 + "rem"};

    a {
      color: ${COLORS.blueText};
    }
  }
`;

const BirthdayWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  select {
    height: 38px;
    width: 100%;
    width: 42%;
    background: ${COLORS.formBlue};
    color: inherit;
    border: none;
    padding: 6px 8px;
    border-radius: ${2 / 16 + "rem"};
    appearance: none;
  }
  input {
    width: 28%;
  }

  .year {
    margin-right: -0.1%;
  }
`;
