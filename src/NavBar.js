import React from 'react';
import { Link } from '@reach/router';
import { css, keyframes } from "@emotion/core";
import colors from './Colors';

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const NavBar = () => {
  return (
    <header 
    css=
    {css`
      background-color: ${colors.secondary};
      position: sticky;
      top: 0;
      z-index: 10;
    `}
  >
    <Link
      css={css`
        &:hover {
          text-decoration: underline;
        }
      `}
      to="/"
    >Adopt Me!</Link>
    <span 
      css={css`
        font-size: 60px;
        display: inline-block;
        animation: 1s ${spin} linear infinite;

        &:hover{
          text-decoration: underline;
          animation: 1s ${spin} linear reverse;
        }
      `} 
      role="img" 
      aria-label="logo">👻</span>
  </header>
  );
};

export default NavBar;