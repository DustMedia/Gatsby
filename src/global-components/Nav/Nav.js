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

const Wrapper = styled.div`
  position: fixed;
  z-index: 100;
  pointer-events: none;
  width: 100%;
`;

const Flex = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
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
  const { menuIsOpen, setMenuIsOpen } = useContext(NavContext);

  return (
    <>
      <Wrapper>
        <Flex>
          <div style={{ pointerEvents: "all" }}>
            <Link to="/" onClick={() => menuIsOpen && setMenuIsOpen(false)}>
              <img src={logo} alt="Dust Media" />
            </Link>
          </div>
          <div style={{ pointerEvents: "all" }}>
            <Burger />
          </div>
        </Flex>
      </Wrapper>
      <AnimatePresence>{menuIsOpen && <Menu />}</AnimatePresence>
    </>
  );
}
