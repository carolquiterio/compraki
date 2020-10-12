import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
import {
  Container,
  ServiceImg,
  AuthorContainer,
  Title,
  SubTitle,
  SectionText,
  BuyButton,
  BuyButtonText,
  Linki
} from "./styles";

import Voucher from "../../components/Voucher";

import meiIMG from "../../assets/meiIMG.png";

export default function Home() {
  return (
    <>
      <Container className="container">
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
        <SectionText>Ofertas</SectionText>
        <Voucher
          title="Pacote de 5 unhas (pé e mão)"
          validity="10/12/2020"
          remain="3"
          oldPrice="200,00"
          price="160,00"
        />
        <Voucher
          title="Pacote de 3 unhas (pé e mão)"
          validity="10/12/2020"
          remain="3"
          oldPrice="200,00"
          price="160,00"
        />
        <Link to="/form-sale" className="link">
          <BuyButtonText>Comprar</BuyButtonText>
        </Link>
      </Container>
    </>
  );
}
