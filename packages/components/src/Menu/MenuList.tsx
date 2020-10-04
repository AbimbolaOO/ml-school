import React from "react";
import styled from "@emotion/styled";
import { BrowserRouter as Router, Link } from "react-router-dom";

import { Button } from "../Button";
import { mq } from "../Themes";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${(props: any) => props.theme.color.SecondaryBackground};
  font-weight: 700;
`;

const DropDownList = styled.ul`
  display: flex;
  list-style: none;
  flex-direction: column;
  border-style: solid;
  border-width: 2px;
  border-color: ${(props: any) => props.theme.color.SecondaryBackground};
  align-items: flex-start;

  position: absolute;
  right: 0px;
  top: 38px;

  visibility: hidden;

  ${mq[1]} {
    visibility: visible;
    position: static;
    width: 100%;
    border: none;
  }
`;

const DropDownListItem = styled.li`
  position: relative;
  display: flex;
  padding-left: 0;

  width: 100%;
  padding: 8px;

  transition: background-color 0.3s ease-in;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }

  &:hover:last-child {
    background-color: rgba(0, 0, 0, 0);
  }

  ${mq[1]} {
    position: static;
    justify-content: center;
  }
`;

export function MenuList() {
  return (
    <Router>
      <DropDownList className="menulist">
        <DropDownListItem>
          <StyledLink to="/profile">User Name</StyledLink>
        </DropDownListItem>
        <DropDownListItem>
          <StyledLink to="/courses">Course</StyledLink>
        </DropDownListItem>
        <DropDownListItem>
          <StyledLink to="/Publications">Publications</StyledLink>
        </DropDownListItem>
        <DropDownListItem>
          <StyledLink to="/profile">Profile</StyledLink>
        </DropDownListItem>
        <DropDownListItem>
          <StyledLink to="/signout">
            <Button variant="primary">Sign out</Button>
          </StyledLink>
        </DropDownListItem>
      </DropDownList>
    </Router>
  );
}
