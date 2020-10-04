import React from "react";
import styled from "@emotion/styled";
import { Links } from "./Link";
import { DropDownMenu } from "../Menu";
import { PrimaryButton } from "../Button";

import { mq } from "../Themes";

// Authentication codes
function Authentication() {
  const isAuthenticated = true;
  return isAuthenticated;
}

function AuthButton() {
  return Authentication() ? (
    <DropDownMenu />
  ) : (
    <PrimaryButton>Login</PrimaryButton>
  );
}

// Styles for the navigation
const Navbar = styled.nav`
  display: flex;
  ${mq[1]} {
    flex-direction: column;
    justify-content: space-around;
    flex-grow: 2;
    border: 2px solid tomato;
    width: 100%;
  }
`;

// styles for Unordersed list
const Ul = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
  justify-content: space-between;
  ${mq[1]} {
    flex-direction: column;
  }
`;

// styles for list elements
const Li = styled.li`
  position: relative;
  display: flex;
  padding-left: 27px;

  ${mq[1]} {
    padding-left: 0px;
    width: 100%;
    position: static;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 8px;

    transition: background-color 0.3s ease-in;
    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }

    /* list that contains a dropdown in them */
    &.drop-down-section {
      background-color: rgba(0, 0, 0, 0);
      padding: 0;
    }

    &:hover.drop-down-section {
      background-color: rgba(0, 0, 0, 0);
    }
  }
`;

export function Navigation() {
  return (
    <Navbar>
      <Ul>
        <Li>
          <Links url="Course">Courses</Links>
        </Li>
        <Li>
          <Links url="blog">Blog</Links>
        </Li>
        <Li className="drop-down-section">
          <AuthButton />
        </Li>
      </Ul>
    </Navbar>
  );
}
