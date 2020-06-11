// Components==============
import { AnimatePresence } from "framer-motion";
import { graphql, Link, useStaticQuery } from "gatsby";
import React, { useContext } from "react";
import styled from "styled-components";
import { Container } from "../../style/Mixins";
import { NavContext } from "../Layout/Layout";
import Burger from "./Burger";
import Menu from "./Menu";
// =========================

const Wrapper = styled(Container)`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  z-index: 100;
  pointer-events: none;
`;

export default function Nav() {
  const data = useStaticQuery(graphql`
    query logoQuery {
      sanityDustMedia {
        logo {
          asset {
            url
          }
        }
      }
    }
  `);

  const logo = data.sanityDustMedia?.logo?.asset?.url;
  const { toggle, isToggled } = useContext(NavContext);

  return (
    <>
      <Wrapper>
        <div style={{ pointerEvents: "all" }}>
          <Link to="/" onClick={() => isToggled && toggle}>
            <img src={logo} alt="Dust Media" />
          </Link>
        </div>
        <div style={{ pointerEvents: "all" }}>
          <Burger />
        </div>
      </Wrapper>
      <AnimatePresence>{isToggled && <Menu />}</AnimatePresence>
    </>
  );
}
