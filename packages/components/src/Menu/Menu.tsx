import React from "react";
import styled from "@emotion/styled";
import { MenuList } from "./MenuList";
import { SecondaryButton } from "../Button";

const Container = styled.section`
  color: red;
  display: flex;
  position: relative;
  border: 2px solid red;
  & input[type="checkbox"]:checked + .menulist {
    visibility: hidden;
  }
`;

const Checked = styled.input`
  opacity: 0;
  position: absolute;
  z-index: 100;
  width: 100%;
  height: 100%;
`;

export function Menu() {
  return (
    <Container>
      <SecondaryButton>Drop Down</SecondaryButton>
      <Checked type="checkbox" />
      <MenuList />
    </Container>
  );
}
