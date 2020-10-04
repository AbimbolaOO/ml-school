import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

interface ImageProps {
  src: string;
  alt: string;
}

const Img = styled.img`
  padding: 8px;
`;

export function CompanyImage({ src, alt }: ImageProps) {
  return (
    <Link to="/">
      <Img src={src} alt={alt} />
    </Link>
  );
}
