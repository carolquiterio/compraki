import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

import {
  Container,
  SectionTitle,
  InputName,
  StyledInput,
  BuyButtonText
} from "./styles";
import Voucher from "../../components/Voucher";

export default function SaleForm() {
  return (
    <Container>
      <SectionTitle>Resumo da compra</SectionTitle>
      <Voucher
        title="Pacote de 3 unhas (pé e mão)"
        validity="10/12/2020"
        remain="3"
        oldPrice="200,00"
        price="160,00"
      />
      <SectionTitle>Informações</SectionTitle>
      <InputName>Nome</InputName>
      <StyledInput placeholder="Ex: Maria Novaes" />
      <InputName>Email</InputName>
      <StyledInput placeholder="Ex: maria@dominio.com" />
      <InputName>Data de nascimento</InputName>
      <StyledInput placeholder="Dia" />
      <StyledInput placeholder="Mês" />
      <StyledInput placeholder="Ano" />
      <InputName>Telefone</InputName>
      <StyledInput placeholder="Ex: 111111111" />
      <InputName>CPF</InputName>
      <StyledInput placeholder="Ex: 111111111" />
      <InputName>Deixe uma mensagem para ana</InputName>
      <StyledInput placeholder="Ex:dorei a promoção, vou comprar sempre que tiver!" />
      <SectionTitle>Pagamento</SectionTitle>
      <InputName>Número do cartão</InputName>
      <StyledInput />
      <InputName>Nome de titular</InputName>
      <StyledInput />
      <InputName>Validade</InputName>
      <StyledInput />
      <InputName>CVV</InputName>
      <StyledInput />

      <Link to="/finish" className="link">
        <BuyButtonText>Comprar</BuyButtonText>
      </Link>
    </Container>
  );
}
