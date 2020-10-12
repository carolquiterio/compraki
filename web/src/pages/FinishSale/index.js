import React from "react";

import PartnerContainer from "../../components/PartnerContainer";

import {
  MiddleContainer,
  BlueText,
  BackLine,
  CongratsImg,
  DetailsText,
  Container,
  PartnersText,
  SeeMoreText,
  MiddleSecondContainer,
  RowDiv,
  StyledFooter,
  FooterText,
  FooterLogo
} from "./styles";

import imgLogo from "../../assets/logo.png";
import img from "../../assets/congratsimg.svg";

export default function FinishSale() {
  return (
    <Container>
      <BackLine>
        <CongratsImg src={img} />
      </BackLine>
      <MiddleContainer>
        <BlueText> Parabèns! :)</BlueText>
        <DetailsText>
          Você colaborou com um empreendedor local. Sua compra foi enviada para
          o seu email, confira!
        </DetailsText>
      </MiddleContainer>
      <MiddleSecondContainer>
        <RowDiv>
          <PartnersText>Parceiros de Ana</PartnersText>
          <SeeMoreText>Ver mais</SeeMoreText>
        </RowDiv>
      </MiddleSecondContainer>
      <RowDiv>
        <PartnerContainer
          name="Jussara Cabelos Afro"
          km="1,4"
          img="../../assets/partners/1.png"
        />
        <PartnerContainer
          name="Quentinhas da Zezé"
          km="2,1"
          img="../../assets/partners/1.png"
        />
        <PartnerContainer
          name="JR Sobrancelhas"
          km="2,5"
          img="../../assets/partners/1.png"
        />
      </RowDiv>
      <StyledFooter>
        <FooterText>Dúvidas ou problemas clique aqui</FooterText>
        <FooterLogo href="/" src={imgLogo} />
      </StyledFooter>
    </Container>
  );
}
