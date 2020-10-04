import React from "react";
import styled from "@emotion/styled";
import { BrowserRouter as Router } from "react-router-dom";

import { Imgs } from "../Assets";
import { CompanyImage } from "../Image";
import { Navigation } from "./NavBar";
import { Hamburger } from "./Hamburger";

import { mq } from "../Themes";

// Styles for the header
const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  /* &:last-child {
    display: none;
  } */

  ${mq[1]} {
    position: relative;
    border: 2px solid black;
    height: 100vh;
    flex-direction: column;
    overflow: auto;
  }

  /* & > div > input[type="checkbox"]:not(checked)  {
    background-color: red;
  } */
`;

// Navigation functional component
export function Headerbar() {
  return (
    <Router>
      <Header>
        <CompanyImage src={Imgs.mlSchool} alt="Company's logo" />
        <Navigation />
        <Hamburger />
      </Header>
    </Router>
  );
}
