export const Variables = {
  gray: [
    "rgba(255, 255, 255, 1)",
    "rgba(250, 250, 250, 1)",
    "rgba(237, 237, 237, 1)",
    "rgba(227, 227, 227, 1)",
    "rgba(217, 217, 217, 1)",
    "rgba(204, 204, 204, 1)",
    "rgba(192, 192, 192, 1)",
    "rgba(176, 176, 176, 1)",
    "rgba(153, 153, 153, 1)",
    "rgba(128, 128, 128, 1)",
    "rgba(114, 114, 114, 1)",
    "rgba(105, 105, 105, 1)",
    "rgba(77, 77, 77, 1)",
    "rgba(54, 54, 54, 1)",
    "rgba(33, 33, 33, 1)",
    "rgba(17, 17, 17, 1)",
    "rgba(0, 0, 0, 1)",
  ],
  primary: "rgba(225, 197, 152, 1)",
  shadow: {
    xs: "0 1px 3px rgba(0, 0, 0, 0.1)",
    s: "0 1px 3px rgba(0, 0, 0, 0.2)",
    m: "0 4px 6px rgba(0, 0, 0, 0.1)",
    l: "0 10px 20px rgba(0, 0, 0, 0.15), 0 5px 8px rgba(0, 0, 0, 0.03)",
    xl: "0 15px 25px rgba(0, 0, 0, 0.15), 0 5px 10px rgba(0, 0, 0, 0.05)",
  },
  spacing: [
    "0.25em",
    "0.5em",
    "0.75em",
    "1em",
    "1.25em",
    "1.5em",
    "1.75em",
    "2em",
    "2.5em",
    "3em",
    "4em",
    "5em",
    "6em",
    "8em",
    "10em",
    "12.5em",
    "16em",
    "20em",
    "24em",
    "30em",
    "48em",
  ],
  borderRadius: "2px",
  fontWeight: {
    normal: "400",
    semiBold: "500",
    bold: "700",
  },
  breakPoint: {
    mobile: "400px",
    tablet: "768px",
    desktopS: "900px",
    desktopM: "1200px",
    desktopL: "1600px",
  },
  fontSize: {
    s: `
    font-weight: 400;
    font-size: 15px;
    
    @media screen and (min-width: 768px) {
     font-size: 16px; 
    }
    `,
    m: `
    font-size: 17px;
    font-weight: 500;
    
    @media screen and (min-width: 768px) {
     font-size: 18px; 
    }
    `,
    l: `
    font-size: 19px;
    font-weight: 500;
    
    @media screen and (min-width: 768px) {
     font-size: 21px; 
    }
    `,
    h4: `
    font-size: 22px;
    
    @media screen and (min-width: 768px) {
     font-size: 25px; 
    }
    `,
    h3: `
    font-size: 24px;
    font-weight: 700;
    
    @media screen and (min-width: 768px) {
     font-size: 28px; 
    }
    `,
    h2: `
    font-size: 27.5px;
    font-weight: 700;
    
    @media screen and (min-width: 768px) {
     font-size: 40px; 
    }
    `,
    h1: `
    font-size: 35px;
    font-weight: 700;
    
    @media screen and (min-width: 768px) {
     font-size: 50px; 
    }
    `,
  },
};
