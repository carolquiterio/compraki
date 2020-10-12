import React from "react";

import {
  Container,
  TitleView,
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
        <Title>Ana Claudia Silva</Title>
        <br />
        <SubTitle>
          Manicure - Unhas em gel, fibra, cutícula e esmaltação.
        </SubTitle>
      </AuthorContainer>
    </Container>
  );
}
