import React from "react";
import { css } from "@emotion/core";
import styled from "@emotion/styled";

const ExLink = styled.a`
  color: black;
  text-decoration: none;
  &:link {
    color: black;
  }
  &:visited {
    color: black;
  }
  &:hover {
    color: red;
    text-decoration: underline;
    text-decoration-color: blue;
  }
  &:active {
    color: black;
  }
`;

interface LinkProps {
  href: string;
  children: string;
}

export function ExternalLink({ href, children }: LinkProps): JSX.Element {
  return <ExLink href={href} children={children} />;
}
