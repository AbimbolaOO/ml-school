import React from "react";
import { Button } from "../Button";
import styled from "@emotion/styled";
import { BrowserRouter as Router, Link } from "react-router-dom";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${(props: any) => props.theme.color.SecondaryBackground};
  font-weight: 700;
`;

const Ul = styled.ul`
  display: inline-flex;
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
`;

const Li = styled.li`
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
`;

export function MenuList() {
  return (
    <Router>
      <Ul className="menulist">
        <Li>
          <StyledLink to="/profile">User Name</StyledLink>
        </Li>
        <Li>
          <StyledLink to="/courses">Course</StyledLink>
        </Li>
        <Li>
          <StyledLink to="/Publications">Publications</StyledLink>
        </Li>
        <Li>
          <StyledLink to="/profile">Profile</StyledLink>
        </Li>
        <Li>
          <StyledLink to="/signout">
            <Button variant="primary">Sign out</Button>
          </StyledLink>
        </Li>
      </Ul>
    </Router>
  );
}
