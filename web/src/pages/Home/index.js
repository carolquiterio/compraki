import React from "react";

import {
  Container,
  TitleView,
  ServiceImg,
  AuthorContainer,
  Title
} from "./styles";

import meiIMG from "../../assets/meiIMG.png";

export default function Home() {
  return (
    <Container>
      <TitleView>
        <AuthorContainer>
          <ServiceImg src={meiIMG} />
          <Title>Ana Claudia Silva</Title>
        </AuthorContainer>
      </TitleView>
    </Container>
  );
}
