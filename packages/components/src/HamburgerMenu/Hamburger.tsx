import React from "react";
import styled from "@emotion/styled";

import { mq } from "../Themes";
import { Navigation } from "./NavBar";

/* The dive below is use to create the horizontal line in the 
Hamburger menu */
const Div = styled.div`
  position: relative;
  width: 32px;
  height: 4px;
  background-color: ${(props: any) => props.theme.color.SecondaryBackground};
  z-index: 1;
  transition: all 0.4s ease;
  &:before,
  &:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 4px;
    background: inherit;
    top: -8px;
  }
  &:after {
    top: 8px;
  }
`;

/* Checkbox contain logic for animation Hamburger Icon 
and navigation menu */
const CheckedBox = styled.input`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2;
  cursor: pointer;
  width: 36px;
  height: 36px;
  opacity: 0;
  ${mq[1]} {
    /* Toggler animation */
    &:checked + div > div {
      transform: rotate(135deg);
    }

    /* this turns lines into x */
    &:checked + div > div:before,
    &:checked + div > div:after {
      top: 0;
      transform: rotate(90deg);
    }
    /* Scale lines when hovered */
    &:not(checked):hover + div > div {
      transform: scaleX(1.1);
    }
    &:checked:hover + div > div {
      transform: rotate(225deg);
    }
    &:not(checked) + div + nav {
      display: none;
    }
    &:checked ~ nav {
      display: flex;
    }
  }
`;

/* Hamburger Icon container */
const Container = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 36px;
  height: 36px;
  padding: 4px;
  display: none;
  justify-content: center;
  align-items: center;
  ${mq[1]} {
    display: flex;
  }
`;

export function Hamburger() {
  return (
    <React.Fragment>
      <CheckedBox type="checkbox" />
      <Container>
        <Div />
      </Container>
      <Navigation />
    </React.Fragment>
  );
}
