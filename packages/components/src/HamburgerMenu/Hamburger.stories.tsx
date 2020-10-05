import React from "react";
import { Hamburger } from "./Hamburger";
import { Links } from "./Link";
import { Navigation } from "./NavBar";

export default {
  title: "Navigation",
  component: Navigation,
};

export const Navigate = () => <Navigation />;
export const HamburgerIcon = () => <Hamburger />;
export const InternalLink = () => <Links url="about">About page</Links>;
export const ExternalLink = () => (
  <Links variant="external-link" url="google.com">
    About page
  </Links>
);
