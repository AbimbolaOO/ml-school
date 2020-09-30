import React from "react";
import { css } from "@emotion/core";
import styled from "@emotion/styled";

type ButtonTypes = {
  variant: string;
  children: any;
};

type Btn = {
  children: any;
};

export const commonStyles = (props: any) => css`
  border-style: solid;
  border-width: 2px;
  border-color: #01579b;
  padding: 8px;
  margin: 0px;
  font-size: 1rem;
  outline: none;
  font-weight: 700;
  transition: all 0.5s ease;
  &:hover {
    cursor: pointer;
    background-color: ${props.theme.color.SecondaryBackgroundDark};
    border-color: ${props.theme.color.SecondaryBackgroundDark};
  }
`;

export const PrimaryButton = styled.button<Btn>`
  ${commonStyles};
  background-color: #01579b;
  color: ${(props: any): string => props.theme.color.SecondaryText};
`;

export const SecondaryButton = styled.button<Btn>`
  ${commonStyles};
  background-color: transparent;
  color: ${(props: any): string => props.theme.color.SecondaryBackground};
  &:hover {
    color: ${(props: any): string => props.theme.color.SecondaryText};
  }
`;

export function Button({ variant, children }: ButtonTypes): JSX.Element {
  switch (variant) {
    case "primay":
      return <PrimaryButton children={children} />;
    case "secondary":
      return <SecondaryButton children={children} />;
    default:
      return <PrimaryButton children={children} />;
  }
}
