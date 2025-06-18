// Components==============
import { motion, usePresence } from "framer-motion";
import { Link } from "gatsby";
import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { Container } from "../../style/Mixins";
import { NavContext } from "../Layout/Layout";
// =========================

const Wrapper = styled(motion.div)`
  width: 100vw;
  height: 100%;
  top: 0;
  position: fixed;
  background: ${({ theme: { gray } }) => gray[15]};
  z-index: 50;
`;

const Items = styled(motion.ul)`
  height: 100%;
  display: Grid;
  align-content: center;
  justify-content: start;

  .active {
    color: ${({ theme: { primary } }) => primary};
  }

  li {
    @media screen and (min-width: ${({ theme: { breakPoint } }) =>
        breakPoint.mobile}) {
      padding-left: ${({ theme: { spacing } }) => spacing[12]};
    }
  }

  a {
    ${({ theme: { fontSize } }) => fontSize.h1}
    line-height: 1.7;
  }
`;

const A = ({ children, to }) => {
  const { setMenuIsOpen } = useContext(NavContext);

  return (
    <motion.li variants={framerItem} whileHover={{ x: 10 }}>
      <Link
        to={to}
        onClick={() => setMenuIsOpen(false)}
        activeClassName="active"
      >
        {children}
      </Link>
    </motion.li>
  );
};

export default function Menu() {
  const [isPresent] = usePresence();

  useEffect(() => {
    isPresent
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "initial");
  }, [isPresent]);

  return (
    <Wrapper
      variants={framerMenu}
      animate="open"
      initial="closed"
      exit="closed"
      key="menu"
    >
      <Container style={{ height: "100%" }}>
        <Items
          variants={framerItems}
          animate={isPresent ? "open" : "closed"}
          initial="closed"
        >
          <A to="/">HOME</A>
          <A to="/overmij">OVER MIJ</A>
          <A to="/projecten">PROJECTEN</A>
          <A to="/contact">CONTACT</A>
        </Items>
      </Container>
    </Wrapper>
  );
}

const framerMenu = {
  open: { y: 0, transition: { damping: 5 } },
  closed: { y: "-100%", transition: { delay: 0.1 } },
};

const framerItems = {
  open: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.4 },
  },
  closed: { opacity: 0 },
};

const framerItem = {
  open: { opacity: 1 },
  closed: { opacity: 0 },
};
