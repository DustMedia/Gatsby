// Components==============
import { useToggle } from "hooks-lib";
import React, { createContext } from "react";
import { hot } from "react-hot-loader/root";
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

function Layout({ children }) {
  const [isToggled, , toggle] = useToggle(false);

  return (
    <ThemeProvider theme={Variables}>
      <IEWarning />
      <NavContext.Provider value={{ isToggled, toggle }}>
        <Nav />
        <Content>{children}</Content>
        <Footer />
      </NavContext.Provider>
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default hot(Layout);
