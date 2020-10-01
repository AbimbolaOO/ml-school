import React from "react";
import { DropDownMenu } from "./DropDown";
import { MenuList } from "./MenuList";

export default {
  title: "Menu",
  component: DropDownMenu,
};

export const DropDown = (): JSX.Element => <DropDownMenu />;
export const MenuLists = (): JSX.Element => <MenuList />;
