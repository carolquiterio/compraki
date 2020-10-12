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

export default function WelcomeFive(props) {
  const navigation = useNavigation();

  function handleButtonPress() {
    navigation.navigate('TabScreen');
  }

  return (
    <Container>
      <StyledImg
        source={require('../../../assets/welcomeimg/5.png')}></StyledImg>
      <TextView>
        <Title>{props.route.params.title}</Title>
        <Subtitle>{props.route.params.subtitle}</Subtitle>
      </TextView>
      <StyledImg
        source={require('../../../assets/welcomeimg/etapas/5.png')}></StyledImg>
      <StyledButton onPress={handleButtonPress}>
        <StyledButtonText>{props.route.params.button}</StyledButtonText>
      </StyledButton>
    </Container>
  );
}
