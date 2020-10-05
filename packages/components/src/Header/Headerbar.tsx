import React from "react";
import styled from "@emotion/styled";
import { BrowserRouter as Router } from "react-router-dom";

import { Imgs } from "../Assets";
import { CompanyImage } from "../Image";
import { Hamburger } from "../HamburgerMenu/Hamburger";

import { mq } from "../Themes";

// Styles for the header
const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props: any) => props.theme.color.PrimaryBackground};
  ${mq[1]} {
    position: relative;
    flex-direction: column;
  }
`;

// Navigation functional component
export function Headerbar() {
  return (
    <Router>
      <Header>
        <CompanyImage src={Imgs.mlSchool} alt="Company's logo" />
        <Hamburger />
      </Header>
    </Router>
  );
}
