import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/EvilIcons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {
  Container,
  LogoContainerMenu,
  IconContainerMenu,
  ImageLogo,
} from './styles';

import LogoImg from '../../assets/logo.png';

const Menu = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <LogoContainerMenu>
        <Image source={LogoImg} />
      </LogoContainerMenu>
    </Container>
  );
};

export default Menu;
