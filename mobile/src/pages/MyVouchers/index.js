import React from 'react';
import {ScrollView} from 'react-native';

import {Container, Title, Subtitle} from './styles';

import Voucher from '../../components/Voucher';

export default function MyVouchers() {
  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Title>Minhas ofertas</Title>
        <Subtitle>Ofertas ativas</Subtitle>
        <Voucher
          title="Pacote de 5 unhas (pé e mão)"
          validity="10/12/2020"
          remain="3"
          oldPrice="200,00"
          price="160,00"
        />
        <Voucher
          title="Pacote de 3 unhas (pé e mão)"
          validity="10/12/2020"
          remain="2"
          oldPrice="130,00"
          price="110,00"
        />
        <Voucher
          title="Pacote de 2 unhas (pé e mão)"
          validity="10/12/2020"
          remain="3"
          oldPrice="70,00"
          price="90,00"
        />

        <Subtitle>Ofertas inativas</Subtitle>
        <Voucher
          title="Pacote de 2 unhas (pé e mão)"
          validity="10/12/2020"
          remain="3"
          oldPrice="70,00"
          price="90,00"
        />
        <Voucher
          title="Pacote de 2 unhas (pé e mão)"
          validity="10/12/2020"
          remain="3"
          oldPrice="70,00"
          price="90,00"
        />
      </ScrollView>
    </Container>
  );
}
