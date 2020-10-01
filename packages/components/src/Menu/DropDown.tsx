import React from "react";
import styled from "@emotion/styled";
import { MenuList } from "./MenuList";
import { SecondaryButton } from "../Button";

const Container = styled.section`
  display: inline-flex;
  flex-direction: column;
  position: relative;

  &:hover .menulist {
    visibility: visible;
  }
`;

const Checked = styled.input`
  position: absolute;
  z-index: 100;
  width: 100%;
  height: 100%;
`;

export function DropDownMenu() {
  return (
    <Container>
      <SecondaryButton>Down</SecondaryButton>
      <MenuList />
    </Container>
  );
}
