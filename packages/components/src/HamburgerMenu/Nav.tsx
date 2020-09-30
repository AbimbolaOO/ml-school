import React from "react";
import { Button } from "../Button";
import { css } from "@emotion/core";
import styled from "@emotion/styled";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Imgs } from "../Assets";

import { Links } from "./Link";
import { Menu } from "../Menu";

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* border: 2px solid red; */
`;
const Navbar = styled.nav`
  display: flex;
  /* flex-basis: 400px; */
  /* border: 2px solid black; */
`;

const Ul = styled.ul`
  display: flex;
  /* border: 2px solid green; */
  list-style: none;
  align-items: center;
  justify-content: space-between;
  /* width: 100%; */
`;

const Li = styled.li`
  /* width: 100px; */
  position: relative;
  display: flex;
  /* justify-content: flex-end; */
  padding-left: 27px;
  /* border: 2px solid tomato; */
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${(props: any) => props.theme.color.SecondaryBackground};
  font-weight: 700;
  /* border: 2px solid teal; */
`;

const NestedUl = styled(Ul)`
  flex-direction: column;
  border-style: solid;
  border-width: 2px;
  border-color: ${(props: any) => props.theme.color.SecondaryBackground};
  align-items: flex-start;

  position: absolute;
  right: 0px;
  top: 52px;

  &:before {
    content: "";
    position: absolute;
    top: -10px;
    right: 0px;
    width: 0;
    height: 0;
    /* border-bottom-style: solid;
    border-bottom-width: 20px;
    border-color: inherit; */

    border-bottom: 10px solid
      ${(props: any) => props.theme.color.SecondaryBackground};
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
  }
`;

const NestedLi = styled(Li)`
  color: red;
  /* border: 2px solid black; */
  padding-left: 0;

  /* line-height: 2rem; */
  width: 100%;
  padding: 8px;

  transition: background-color 0.5s ease-in;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
  &:hover:last-child {
    background-color: rgba(0, 0, 0, 0);
  }
`;

export function Nav() {
  return (
    <Router>
      <Header>
        {/* <section
          style={{ border: "2px solid yellow" }}
          aria-label="companies logo"
        > */}
        <img src={Imgs.mlSchool} alt="Company's logo" />
        {/* </section> */}
        <Navbar>
          <Ul>
            <Li>
              <Links url="/Course">Courses</Links>
            </Li>

            <Li>
              <Menu />
              {/* <Links url="/blog">Blog</Links> */}
            </Li>

            <Li>
              <Menu />
              {/* <StyledLink to="/login">
                <Button variant="secondary">Login</Button>
                <NestedUl>
                  <NestedLi>
                    <StyledLink to="/profile">User Name</StyledLink>
                  </NestedLi>
                  <NestedLi>
                    <StyledLink to="/courses">Course</StyledLink>
                  </NestedLi>
                  <NestedLi>
                    <StyledLink to="/Publications">Publications</StyledLink>
                  </NestedLi>
                  <NestedLi>
                    <StyledLink to="/profile">Profile</StyledLink>
                  </NestedLi>
                  <NestedLi>
                    <StyledLink to="/signout">
                      <Button variant="primary">Sign out</Button>
                    </StyledLink>
                  </NestedLi>
                </NestedUl>
              </StyledLink> */}
            </Li>
          </Ul>
        </Navbar>
      </Header>
    </Router>
  );
}
