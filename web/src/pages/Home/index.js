import React from "react";

import {
  Container,
  ServiceImg,
  AuthorContainer,
  Title,
  SubTitle
} from "./styles";

import meiIMG from "../../assets/meiIMG.png";

export default function Home() {
  return (
    <Container>
      <AuthorContainer>
        <ServiceImg src={meiIMG} />
        <br />
        <br />

        <Title>Ana Claudia Silva</Title>
        <br />
        <SubTitle>
          Manicure - Unhas em gel, fibra, cutícula e esmaltação.
        </SubTitle>
      </AuthorContainer>
    </Container>
  );
}
