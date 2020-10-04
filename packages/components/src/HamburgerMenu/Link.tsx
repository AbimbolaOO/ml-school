import React from "react";
import styled from "@emotion/styled";
import { BrowserRouter as Router, Link } from "react-router-dom";

import { mq } from "../Themes";

type LinkProps = {
  url: string;
  children: string;
  variant?: string;
};

const InternalLink = styled(Link)`
  color: ${(props: any) => props.theme.color.SecondaryBackground};
  text-decoration: none;
  position: relative;
  font-weight: 700;
  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    top: 1.3rem;
    background-color: ${(props: any) => props.theme.color.SecondaryBackground};
    transform: scaleX(0);
    transition: transform 0.3s;
  }
  &:link {
    color: ${(props: any) => props.theme.color.SecondaryBackground};
  }
  &:visited {
    color: ${(props: any) => props.theme.color.SecondaryBackground};
  }
  &:hover {
    color: ${(props: any) => props.theme.color.SecondaryBackground};
  }
  &:hover:before {
    transform: scaleX(1);
  }
  &:active {
    color: ${(props: any) => props.theme.color.SecondaryBackground};
  }

  /* Smaller screens */
  ${mq[1]} {
    /* Prevent the underline animations */
    &:before {
      content: none;
    }
  }
`;

const ExternalLink = styled.a`
  color: ${(props: any) => props.theme.color.SecondaryBackground};
  text-decoration: none;
  position: relative;
  font-weight: 400;
  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 1.4rem;
    top: 0.1rem;
    background-color: ${(props: any) => props.theme.color.SecondaryBackground};
    transform: scaleY(0.1);
    transition: transform 0.3s;
    transform-origin: bottom;
    z-index: -1;
  }
  &:link {
    color: ${(props: any) => props.theme.color.SecondaryBackground};
  }
  &:visited {
    color: ${(props: any) => props.theme.color.SecondaryBackground};
  }
  &:hover {
    color: ${(props: any) => props.theme.color.SecondaryText};
  }
  &:hover:before {
    transform: scaleY(1.1);
  }
  &:active {
    color: ${(props: any) => props.theme.color.SecondaryBackground};
  }
`;

export function Links({ url, variant, children }: LinkProps): JSX.Element {
  return (
    <Router>
      {variant === "external-link" ? (
        <ExternalLink href={url}>{children}</ExternalLink>
      ) : (
        <InternalLink to={`/${url}`}>{children}</InternalLink>
      )}
    </Router>
  );
}
