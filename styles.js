import { createGlobalStyle } from "styled-components";
import { Open_Sans, Roboto } from "next/font/google";

const openSans = Open_Sans({ subsets: ["latin"] });
const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"] });

export default createGlobalStyle`
  *, 
  *::before,
  *::after {
    box-sizing: border-box;
  }

  :root {
    --primary-color: #22babb; 
    --secondary-color: #f24405;
    --primary-background: #d3d3d3;
    --font-roboto: ${roboto.style.fontFamily}
  }

  body {
    margin: 0;
    font-family: ${openSans.style.fontFamily}, system-ui;
    padding: 2rem;
  }
`;
