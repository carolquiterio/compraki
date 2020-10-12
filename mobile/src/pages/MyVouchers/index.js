import React from 'react';
import {View, Linking} from 'react-native';

import {Container, Title, Subtitle} from './styles';

import Voucher from '../../components/Voucher';

export default function MyVouchers() {
  return (
    <Container>
      <Title>Minhas ofertas</Title>
      <Subtitle>Ofertas ativas</Subtitle>
    </Container>
  );
}
