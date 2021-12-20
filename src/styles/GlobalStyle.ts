import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }

  ::-webkit-scrollbar-track {
    background: #8884;
    border-radius: 20px;

  }

  ::-webkit-scrollbar-thumb {
    background: #3333;
    border-radius: 20px;
  }

  :root {
   --blue-50: #3751FE;
   --blue-100: #4318FF;
   --blue-200: #2B3674;
   --blue-250: #3751FE;
   --blue-300: #0f172a;
   --purple-50: #4318FF1A;
   --grey-50: #2B3674;
   --grey-100: #A3AED0;
   --grey-200: #a0a8b1;
   --grey-300: #7e8389;
   --green-100: #01C449;
   --yellow-100: #FFC107;
   --orange-100: #D97953;
   --white-50: #ffffff;
   --white-100: #FFFFFFB2;
   --background: #f4f7fe;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    font-family: 'DM Sans', sans-serif !important;
  }

  html { 
    @media (min-width: 1080px) {
      font-size: 93.75%;
    }
    @media (min-width: 720px) {
      font-size: 87.5%;
    }
    @media (min-width: 420px) {
      font-size: 77.5%;
    }
  }

  body { 
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'DM Sans', sans-serif;
    font-weight: 400;
    border: 0;
    outline: 0;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  
  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  button { 
    outline: none;
    border: none;
    cursor: pointer;
  }

  a {
    text-decoration: none;
    cursor: pointer;
    color: #111;
  }

  .react-modal-overlay {
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;

  }

  .react-modal-content {
    width: 100%;
    max-width: 400px;
    background-color: #fff;
    padding: 3rem;
    position: relative;
    border-radius: 0.75rem;

    box-shadow: 4px 7px 32px -8px rgba(43, 54, 116, 0.25);
  }

  .react-modal-contributors-content {
    width: 100%;
    max-width: 1000px;
    background-color: #fff;
    padding: 3rem;
    position: relative;
    border-radius: 0.75rem;

    box-shadow: 4px 7px 32px -8px rgba(43, 54, 116, 0.25);
  }
`;
