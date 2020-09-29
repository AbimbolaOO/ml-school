import React from "react";
import { css } from "@emotion/core";
import styled from "@emotion/styled";

const Div = styled.div`
  position: relative;
  width: 50px;
  height: 4px;
  background-color: orange;
  z-index: 1;
  transition: all 0.4s ease;
  &:before,
  &:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 4px;
    background: inherit;
    top: -10px;
  }
  &:after {
    top: 10px;
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
  position: fixed;
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: tomato;

  & input[type="checkbox"]:checked:hover + div {
    transform: rotate(225deg);
  }
`;

export function HamburgerMenu() {
  return (
    <div>
      <Container>
        <CheckedBox type="checkbox" />
        <Div />
      </Container>
      <div>
        <ul>
          <li>item 1</li>
          <li>item 2</li>
          <li>item 3</li>
          <li>item 4</li>
        </ul>
      </div>
    </div>
  );
}
