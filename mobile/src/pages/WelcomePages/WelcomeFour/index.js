import React from 'react';

import {
  Container,
  Title,
  Subtitle,
  StyledImg,
  StyledButton,
  StyledButtonText,
  StyledImgProgess,
  TextView,
} from './styles';

import {useNavigation} from '@react-navigation/native';

export default function WelcomeFour(props) {
  const navigation = useNavigation();

  function handleButtonPress() {
    navigation.navigate('WelcomeFive', {
      title: 'Apoio ao Local',
      subtitle:
        'Quando um cliente concluir a compra, ele verá a Rede de Parceiros como sugestão.',
      button: 'Quero começar!',
    });
  }

  return (
    <Container>
      <StyledImg
        source={require('../../../assets/welcomeimg/4.png')}></StyledImg>
      <TextView>
        <Title>{props.route.params.title}</Title>
        <Subtitle>{props.route.params.subtitle}</Subtitle>
      </TextView>
      <StyledImgProgess
        source={require('../../../assets/welcomeimg/etapas/4.png')}></StyledImgProgess>
      <StyledButton onPress={handleButtonPress}>
        <StyledButtonText>{props.route.params.button}</StyledButtonText>
      </StyledButton>
    </Container>
  );
}
