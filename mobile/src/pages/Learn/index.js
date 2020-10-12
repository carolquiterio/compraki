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

export default function Welcome(props) {
  const navigation = useNavigation();

  function handleButtonPress() {
    navigation.navigate('WelcomeTwo', {
      title: 'É Fácil!',
      subtitle:
        'Basta enviar um link para seus clientes e eles vão poder realizar o pagamento.',
      button: 'Próximo',
    });
  }

  return (
    <Container>
      <StyledImg
        source={require('../../../assets/welcomeimg/1.png')}></StyledImg>
      <TextView>
        <Title>{props.route.params.title}</Title>
        <Subtitle>{props.route.params.subtitle}</Subtitle>
      </TextView>
      <StyledImgProgess
        source={require('../../../assets/welcomeimg/etapas/1.png')}></StyledImgProgess>
      <StyledButton onPress={handleButtonPress}>
        <StyledButtonText>{props.route.params.button}</StyledButtonText>
      </StyledButton>
    </Container>
  );
}
