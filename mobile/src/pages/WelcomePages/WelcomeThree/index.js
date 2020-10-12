import React from 'react';

import {
  Container,
  Title,
  Subtitle,
  StyledImg,
  StyledButton,
  StyledButtonText,
  TextView,
} from './styles';

import {useNavigation} from '@react-navigation/native';

export default function WelcomeThree(props) {
  const navigation = useNavigation();

  function handleButtonPress() {
    navigation.navigate('WelcomeFour', {
      title: 'Monte sua Rede!',
      subtitle:
        'Você também pode montar uma Rede de Parceiros com outros MEIs próximos.',
      button: 'Próximo',
    });
  }

  return (
    <Container>
      <StyledImg
        source={require('../../../assets/welcomeimg/3.png')}></StyledImg>
      <TextView>
        <Title>{props.route.params.title}</Title>
        <Subtitle>{props.route.params.subtitle}</Subtitle>
      </TextView>
      <StyledImg
        source={require('../../../assets/welcomeimg/etapas/3.png')}></StyledImg>
      <StyledButton onPress={handleButtonPress}>
        <StyledButtonText>{props.route.params.button}</StyledButtonText>
      </StyledButton>
    </Container>
  );
}
