import React from "react";
import { Hamburger } from "./Hamburger";
import { Links } from "./Link";
import { Headerbar } from "./Headerbar";

export default {
  title: "Header",
  component: Headerbar,
};

export const Header = () => <Headerbar />;
export const HamburgerIcon = () => <Hamburger />;
export const InternalLink = () => <Links url="about">About page</Links>;
export const ExternalLink = () => (
  <Links variant="external-link" url="google.com">
    About page
  </Links>
);
