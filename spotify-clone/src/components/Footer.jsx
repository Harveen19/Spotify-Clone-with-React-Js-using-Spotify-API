import React from "react";
import styled from "styled-components";

export default function Footer() {
  return <Container>Footer</Container>;
}

const Container = styled.div`
    background-color: #181818;
    height: 100%;
    width: 100%;
    display: grid;
    border-top: 1px solid #282828;
    align-items: center;
    grid-template-columns: 1fr 2fr 1fr;
    padding: 0 1rem;
    justify-content: center;
`;