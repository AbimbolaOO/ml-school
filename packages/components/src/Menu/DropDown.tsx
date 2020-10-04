import React from "react";
import styled from "@emotion/styled";

import { MenuList } from "./MenuList";
import { SecondaryButton } from "../Button";
import { mq } from "../Themes";

const DropDownButton = styled(SecondaryButton)`
  &:hover + .menulist {
    visibility: visible;
  }
  & + .menulist:hover {
    visibility: visible;
  }
  ${mq[1]} {
    display: none;
  }
`;

export function DropDownMenu() {
  return (
    <React.Fragment>
      <DropDownButton>Down</DropDownButton>
      <MenuList />
    </React.Fragment>
  );
}
