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

export default function Learn() {
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
      <StyledImg source={require('../../assets/coin.png')}></StyledImg>
      <TextView>
        <Title>Quero aprender mais sobre finanças</Title>
        <Subtitle>
          O Sebrae oferece materiais gratuitos que podem te ajudar a controlar
          melhor as suas finanças.
        </Subtitle>
      </TextView>

      <StyledButton onPress={handleButtonPress}>
        <StyledButtonText>SEBRAE</StyledButtonText>
      </StyledButton>
    </Container>
  );
}
