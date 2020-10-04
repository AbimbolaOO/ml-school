import React from "react";
import styled from "@emotion/styled";

import { mq } from "../Themes";

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

const CheckedBox = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  cursor: pointer;
  width: 50px;
  height: 50px;
  opacity: 0;

  /* Toggler animation */
  &:checked + div {
    transform: rotate(135deg);
  }

  /* this turns lines into x */
  &:checked + div:before,
  &:checked + div:after {
    top: 0;
    transform: rotate(90deg);
  }
`;

const Container = styled.div`
  position: relative;
  width: 36px;
  height: 36px;
  padding: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 2px solid tomato; */
  & input[type="checkbox"]:not(checked):hover + div {
    transform: scaleX(1.1);
  }
  & input[type="checkbox"]:checked:hover + div {
    transform: rotate(225deg);
  }
  border: 2px solid black;
  display: none;

  /* Small screens */
  ${mq[1]} {
    display: flex;
    position: absolute;
    top: 0px;
    right: 4px;
  }
`;

export function Hamburger() {
  return (
    <Container>
      <CheckedBox type="checkbox" />
      <Div />
    </Container>
  );
}
