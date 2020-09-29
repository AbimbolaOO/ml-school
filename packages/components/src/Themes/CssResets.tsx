import React from "react";
import emotionNormalize from "emotion-normalize";
import { Global, css } from "@emotion/core";

export function GlobalStyles(): JSX.Element {
  return (
    <Global
      styles={css`
        ${emotionNormalize}
        *,
        *::after,
        *::before {
          @import url("https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&family=IBM+Plex+Sans:wght@400;600&display=swap");
          padding: 0;
          margin: 0;
          font-family: "IBM Plex Sans", "IBM Plex Mono";
          box-sizing: border-box;
          -moz-osx-font-smoothing: grayscale;
          -webkit-font-smoothing: antialiased;
        }
      `}
    />
  );
}
