import { ReactNode } from "react";
import styled from "styled-components";

import Footer from "../Footer";
import { Navbar } from "../Navbar";

interface ILayout {
  children: ReactNode;
  bgColor?: string;
}

export function Layout({ children }: ILayout) {
  return (
    <>
      <LayoutStyled>
        <Navbar />
        <main>{children}</main>
      </LayoutStyled>
      <Footer />
    </>
  );
}

export const LayoutStyled = styled.div<ILayout>`
  background-color: ${({ bgColor }) => `${bgColor || "black"}`};
  min-height: 100vh;
  width: 100%;

  main {
    border-top: 1px solid #2a2a2a;
    width: 100%;
    height: 100%;
  }
  > * {
    color: white;
  }
`;
