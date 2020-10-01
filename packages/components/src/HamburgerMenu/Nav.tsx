import React from "react";
import styled from "@emotion/styled";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Imgs } from "../Assets";

import { Links } from "./Link";
import { DropDownMenu } from "../Menu";

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Navbar = styled.nav`
  display: flex;
`;

const Ul = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
  justify-content: space-between;
`;

const Li = styled.li`
  position: relative;
  display: flex;
  padding-left: 27px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${(props: any) => props.theme.color.SecondaryBackground};
  font-weight: 700;
`;

export function Nav() {
  return (
    <Router>
      <Header>
        <img src={Imgs.mlSchool} alt="Company's logo" />
        <Navbar>
          <Ul>
            <Li>
              <Links url="/Course">Courses</Links>
            </Li>

            <Li>
              <DropDownMenu />
              {/* <Links url="/blog">Blog</Links> */}
            </Li>

            <Li>
              <DropDownMenu />
            </Li>
          </Ul>
        </Navbar>
      </Header>
    </Router>
  );
}
