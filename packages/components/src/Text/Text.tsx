import styled from "@emotion/styled";
import { css } from "@emotion/core";

const CommonStyles = css`
  padding: 8px;
  font-weight: 1rem;
`;

export const H1 = styled.h1`
  ${CommonStyles}
  font-size: 1.953rem;
`;

export const H2 = styled.h2`
  ${CommonStyles}
  font-size: 1.563rem;
`;

export const H3 = styled.h3`
  ${CommonStyles}
  font-size: 1.25rem;
`;

export const Paragraph = styled.p`
  ${CommonStyles}
  line-height: 1.6em;
`;

export const FormText = styled.p`
  ${CommonStyles}
  font-size: 0.8rem;
`;

export const CopyWriteText = styled.p`
  ${CommonStyles}
  font-size: 0.8rem;
  font-family: "IBM Plex Mono";
`;
