import React from 'react';

import {
  Container,
  Title,
  Subtitle,
  StyledImg,
  StyledButton,
  StyledButtonText,
  TextView,
  StyledImgProgess,
} from './styles';

import {useNavigation} from '@react-navigation/native';

export default function WelcomeTwo(props) {
  const navigation = useNavigation();

  function handleButtonPress() {
    navigation.navigate('WelcomeThree', {
      title: 'As Vantagens?',
      subtitle:
        'Você vende antecipamente, recebendo o seu dinheiro na hora. E mais! Pode gerar vendas recorrentes.',
      button: 'Próximo',
    });
  }

  return (
    <Container>
      <StyledImg
        source={require('../../../assets/welcomeimg/2.png')}></StyledImg>
      <TextView>
        <Title>{props.route.params.title}</Title>
        <Subtitle>{props.route.params.subtitle}</Subtitle>
      </TextView>
      <StyledImgProgess
        source={require('../../../assets/welcomeimg/etapas/2.png')}></StyledImgProgess>
      <StyledButton onPress={handleButtonPress}>
        <StyledButtonText>{props.route.params.button}</StyledButtonText>
      </StyledButton>
    </Container>
  );
}
