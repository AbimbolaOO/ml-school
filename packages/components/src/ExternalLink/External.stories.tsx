import React from "react";
import { ExternalLink } from "./ExternalLink";

export default {
  title: "ExternalLink",
  component: ExternalLink,
};

export const Link = () => {
  return <ExternalLink href="google.com">test google</ExternalLink>;
};
