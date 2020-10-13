import React from 'react';
import {ScrollView, Image} from 'react-native';

import {
  Container,
  Title,
  StyledInput,
  SeeMoreText,
  SectionTitle,
  SeeMoreTwo,
  PartnerTitle,
  PartnerContainer,
  RowDiv,
  StyledScrollView,
} from './styles';

import img1 from '../../assets/partner/1.png';
import img2 from '../../assets/partner/2.png';
import img3 from '../../assets/partner/3.png';
import img5 from '../../assets/partner/5.png';
import img6 from '../../assets/partner/6.png';
import img4 from '../../assets/partner/4.png';

export default function Partners() {
  return (
    <Container>
      <Title>Rede de parceiros</Title>
      <StyledInput placeholder="Pesquisar"></StyledInput>
      <SeeMoreText>ver mais</SeeMoreText>
      <RowDiv>
        <SectionTitle>Meus parceiros</SectionTitle>
        <SeeMoreTwo>ver mapa</SeeMoreTwo>
      </RowDiv>
      <StyledScrollView horizontal showsHorizontalScrollIndicator={false}>
        <PartnerContainer>
          <Image source={img1}></Image>
          <PartnerTitle>Jussara Cabelos Afro</PartnerTitle>
          <SeeMoreTwo>2,1 km</SeeMoreTwo>
        </PartnerContainer>
        <PartnerContainer>
          <Image source={img2}></Image>
          <PartnerTitle>Jussara Cabelos Afro</PartnerTitle>
          <SeeMoreTwo>2,1 km</SeeMoreTwo>
        </PartnerContainer>
        <PartnerContainer>
          <Image source={img3}></Image>
          <PartnerTitle>Jussara Cabelos Afro</PartnerTitle>
          <SeeMoreTwo>2,1 km</SeeMoreTwo>
        </PartnerContainer>
        <PartnerContainer>
          <Image source={img1}></Image>
          <PartnerTitle>Jussara Cabelos Afro</PartnerTitle>
          <SeeMoreTwo>2,1 km</SeeMoreTwo>
        </PartnerContainer>
        <PartnerContainer>
          <Image source={img2}></Image>
          <PartnerTitle>Jussara Cabelos Afro</PartnerTitle>
          <SeeMoreTwo>2,1 km</SeeMoreTwo>
        </PartnerContainer>
        <PartnerContainer>
          <Image source={img3}></Image>
          <PartnerTitle>Jussara Cabelos Afro</PartnerTitle>
          <SeeMoreTwo>2,1 km</SeeMoreTwo>
        </PartnerContainer>
      </StyledScrollView>
      <RowDiv>
        <SectionTitle>Sugestão de parceiros</SectionTitle>
        <SeeMoreTwo>ver mais</SeeMoreTwo>
      </RowDiv>
      <StyledScrollView horizontal showsHorizontalScrollIndicator={false}>
        <PartnerContainer>
          <Image source={img5}></Image>
          <PartnerTitle>Jussara Cabelos Afro</PartnerTitle>
          <SeeMoreTwo>2,1 km</SeeMoreTwo>
        </PartnerContainer>
        <PartnerContainer>
          <Image source={img6}></Image>
          <PartnerTitle>Jussara Cabelos Afro</PartnerTitle>
          <SeeMoreTwo>2,1 km</SeeMoreTwo>
        </PartnerContainer>
        <PartnerContainer>
          <Image source={img4}></Image>
          <PartnerTitle>Jussara Cabelos Afro</PartnerTitle>
          <SeeMoreTwo>2,1 km</SeeMoreTwo>
        </PartnerContainer>
        <PartnerContainer>
          <Image source={img1}></Image>
          <PartnerTitle>Jussara Cabelos Afro</PartnerTitle>
          <SeeMoreTwo>2,1 km</SeeMoreTwo>
        </PartnerContainer>
        <PartnerContainer>
          <Image source={img2}></Image>
          <PartnerTitle>Jussara Cabelos Afro</PartnerTitle>
          <SeeMoreTwo>2,1 km</SeeMoreTwo>
        </PartnerContainer>
        <PartnerContainer>
          <Image source={img3}></Image>
          <PartnerTitle>Jussara Cabelos Afro</PartnerTitle>
          <SeeMoreTwo>2,1 km</SeeMoreTwo>
        </PartnerContainer>
      </StyledScrollView>
    </Container>
  );
}
