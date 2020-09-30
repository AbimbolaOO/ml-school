import React from "react";
import { Hamburger } from "./Hamburger";
import { Links } from "./Link";
import { Nav } from "./Nav";

export default {
  title: "Header",
  component: Nav,
};

export const Navigation = () => <Nav />;
export const HamburgerIcon = () => <Hamburger />;
export const InternalLink = () => <Links url="about">About page</Links>;
export const ExternalLink = () => (
  <Links variant="external-link" url="google.com">
    About page
  </Links>
);
