import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

import Select from "../../components/Select";

import {
  Container,
  SectionTitle,
  InputName,
  StyledInput,
  BuyButtonText,
  RowDiv,
  StyledTextArea,
  ColumnDiv,
  StyledInputEnd
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
      <RowDiv>
        <Select
          name="day"
          label="Dia"
          options={[
            { value: "1", label: "01" },
            { value: "2", label: "02" },
            { value: "3", label: "03" },
            { value: "4", label: "04" },
            { value: "5", label: "05" },
            { value: "6", label: "06" },
            { value: "7", label: "07" },
            { value: "8", label: "08" },
            { value: "9", label: "09" }
          ]}
        />
        <Select
          name="day"
          label="Mês"
          options={[
            { value: "1", label: "01" },
            { value: "2", label: "02" },
            { value: "3", label: "03" },
            { value: "4", label: "04" },
            { value: "5", label: "05" },
            { value: "6", label: "06" },
            { value: "7", label: "07" },
            { value: "8", label: "08" },
            { value: "9", label: "09" },
            { value: "9", label: "10" },
            { value: "9", label: "11" },
            { value: "9", label: "12" }
          ]}
        />
        <Select
          name="day"
          label="Ano"
          options={[
            { value: "1", label: "2020" },
            { value: "2", label: "2021" },
            { value: "3", label: "2022" },
            { value: "4", label: "2023" },
            { value: "5", label: "2024" },
            { value: "6", label: "2025" },
            { value: "7", label: "2026" },
            { value: "8", label: "2027" },
            { value: "9", label: "2028" }
          ]}
        />
      </RowDiv>
      <RowDiv>
        <ColumnDiv>
          <InputName>Telefone</InputName>
          <StyledInput placeholder="Ex: 111111111" />
        </ColumnDiv>
        <ColumnDiv>
          <InputName>CPF</InputName>

          <StyledInput placeholder="Ex: 111111111" />
        </ColumnDiv>
      </RowDiv>
      <InputName>Deixe uma mensagem para ana</InputName>
      <StyledTextArea
        rows="5"
        placeholder="Ex:dorei a promoção, vou comprar sempre que tiver!"
      />
      <SectionTitle>Pagamento</SectionTitle>
      <InputName>Número do cartão</InputName>
      <StyledInput />
      <InputName>Nome de titular</InputName>
      <StyledInput />
      <RowDiv>
        <ColumnDiv>
          <InputName>Validade</InputName>
          <StyledInput />
        </ColumnDiv>
        <ColumnDiv>
          <InputName>CVV</InputName>
          <StyledInputEnd />
        </ColumnDiv>
      </RowDiv>

      <Link to="/finish" className="link">
        <BuyButtonText>Comprar</BuyButtonText>
      </Link>
    </Container>
  );
}
