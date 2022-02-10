import React from "react";
import styled from "styled-components";

import Bg from "../../assets/images/background/bg-footer.jpg";
function Footer() {
  return (
    <FooterStyled>
      <h4>FOLLOW STAR WARS</h4>
    </FooterStyled>
  );
}

export const FooterStyled = styled.footer`
  color: white;
  min-height: 280px;
  background-image: url(${Bg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  filter: grayscale(50%);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Footer;
