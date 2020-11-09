import React from "react";
import { H1, H2, H3, Paragraph, FormText, CopyWriteText } from "./Text";

export default {
  title: "Text",
  component: Paragraph,
};

export const Paragraphs = (): JSX.Element => <Paragraph>Text</Paragraph>;
export const Header1 = (): JSX.Element => <H1>Text</H1>;
export const Header2 = (): JSX.Element => <H2>Text</H2>;
export const Header3 = (): JSX.Element => <H3>Text</H3>;
export const Formtext = (): JSX.Element => <FormText>Text</FormText>;
export const CopywriteText = (): JSX.Element => (
  <CopyWriteText>Text</CopyWriteText>
);
