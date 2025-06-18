// Components==============
import React, { createContext, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyles from "../../style/GlobalStyles";
import { Variables } from "../../style/themes";
import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";
import IEWarning from "./IE/IEWarning";
// =========================

const Content = styled.div`
  min-height: 75vh;
`;

export const NavContext = createContext();

export default function Layout({ children }) {
  const [menuIsOpen, setMenuIsOpen] = useState();

  return (
    <ThemeProvider theme={Variables}>
      <IEWarning />
      <NavContext.Provider value={{ menuIsOpen, setMenuIsOpen }}>
        <Nav />
        <Content>{children}</Content>
        <Footer />
      </NavContext.Provider>
      <GlobalStyles />
    </ThemeProvider>
  );
}
