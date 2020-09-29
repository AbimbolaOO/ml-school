import React from "react";
import { Button } from "./Button";
2;
export default {
  title: "Button",
  component: Button,
};

interface Args {
  variant: "string";
  children: "String";
}

export const Primary = (): JSX.Element => (
  <Button variant="primary">Button</Button>
);
export const Secounday = (): JSX.Element => (
  <Button variant="secondary">Button</Button>
);
