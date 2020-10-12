import React from 'react';
import {Image, View} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import {
  Container,
  MidleContainer,
  Title,
  Subtitle,
  OfferContainer,
  OfferTitle,
  MidleContainerText,
  OfferContainerTwo,
  RowDiv,
  LittleText,
} from './styles';

import phoneimg from '../../assets/phone.png';
import imgdois from '../../assets/start.png';
import imgtres from '../../assets/start2.png';

export default function Start() {
  const navigation = useNavigation();

  function handleCreatePress() {
    navigation.navigate('TabScreen');
  }

  function handlePartnersPress() {
    navigation.navigate('Partners');
  }

  function handleLearnPress() {
    navigation.navigate('Learn');
  }

  return (
    <Container>
      <Title>Pronta para começar?</Title>
      <Subtitle>
        Começe a gerar caixa agora mesmo! Mas, lembre: valorize a confiança do
        seu cliente.
      </Subtitle>
      <OfferContainer onPress={handleCreatePress}>
        <MidleContainerText>
          <OfferTitle>Quero criar minha própria oferta!</OfferTitle>
        </MidleContainerText>
        <MidleContainer>
          <Image source={phoneimg} />
        </MidleContainer>
      </OfferContainer>
      <RowDiv>
        <OfferContainerTwo onPress={handlePartnersPress}>
          <LittleText>Criar minha rede de parceiros</LittleText>
          <MidleContainer>
            <Image source={imgdois} />
          </MidleContainer>
        </OfferContainerTwo>
        <OfferContainerTwo onPress={handleLearnPress}>
          <LittleText>Quero aprender mais sobre finanças</LittleText>
          <MidleContainer>
            <Image source={imgtres} />
          </MidleContainer>
        </OfferContainerTwo>
      </RowDiv>
    </Container>
  );
}
