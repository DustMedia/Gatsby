import styled from "styled-components";

// Container

export const Container = styled.div`
  padding: 0 5%;
  width: 100%;
  max-width: 100rem;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    padding: 0 6.5%;
  }

  @media screen and (min-width: 1200px) {
    padding: 0 9%;
  }

  @media screen and (min-width: 1600px) {
    padding: 0 12%;
    max-width: 130rem;
  }
`;

// Button

export const Button = styled.button`
  background-color: ${({ theme: { primary } }) => primary};
  color: black;
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.semiBold};
  padding: ${({ theme: { spacing } }) => `${spacing[0]} ${spacing[4]}`};
  display: inline-block;
  border-radius: ${({ theme: { borderRadius } }) => borderRadius};
`;

// BlockStyling

export const BlockStyling = styled.div`
  p {
    margin-bottom: ${({ theme: { spacing } }) => spacing[3]};
    line-height: 1.4;
  }

  strong {
    line-height: 1.4;
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};
    ${({ theme: { fontSize } }) => fontSize.m}
  }

  blockquote::before {
    content: open-quote;
  }

  blockquote::after {
    content: close-quote;
  }

  blockquote {
    quotes: "“" "”" "‘" "’";
  }

  ul {
    margin-left: ${({ theme: { spacing } }) => spacing[6]};

    li {
      list-style: initial;
    }
  }

  ol {
    margin-left: ${({ theme: { spacing } }) => spacing[6]};

    li {
      list-style: upper-greek;
    }
  }

  a {
    cursor: pointer;
    text-decoration: underline;
  }
`;
