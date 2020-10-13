import React from 'react';
import {ScrollView} from 'react-native';

import {
  Container,
  RowDiv,
  StyledInput,
  Title,
  InputName,
  StyledInputLitter,
  ColumnDiv,
  Description,
  StyledButton,
  StyledButtonText,
} from './styles';

export default function CreateVoucher() {
  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Title>Criar oferta</Title>
        <InputName>Título</InputName>
        <StyledInput placeholder="Ex: 5 sessões de massagem"></StyledInput>
        <Description>Crie um título que descreva a sua oferta.</Description>
        <RowDiv>
          <ColumnDiv>
            <InputName>Validade de oferta {'                    '}</InputName>
            <StyledInputLitter placeholder="01/01/2021" />
            <Description>Até quando COMPRAR?</Description>
          </ColumnDiv>
          <ColumnDiv>
            <InputName>Validade de ultilização</InputName>
            <StyledInputLitter placeholder="01/01/2021" />
            <Description>Até quando UTILIZAR?</Description>
          </ColumnDiv>
        </RowDiv>
        <RowDiv>
          <ColumnDiv>
            <InputName>
              Preço original {'                            '}
            </InputName>
            <StyledInputLitter placeholder="01/01/2021" />
            <Description> </Description>
          </ColumnDiv>
          <ColumnDiv>
            <InputName>Preço ofertado {'            '} </InputName>
            <StyledInputLitter placeholder="01/01/2021" />
          </ColumnDiv>
        </RowDiv>
        <InputName>Inserir uma foto da oferta</InputName>
        <StyledInput placeholder="Insira uma foto da ofeta"></StyledInput>

        <InputName>Quantidade máxima</InputName>
        <StyledInput placeholder="Número"></StyledInput>
        <StyledButton>
          <StyledButtonText>CRIAR OFERTA</StyledButtonText>
        </StyledButton>
      </ScrollView>
    </Container>
  );
}
