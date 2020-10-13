import React, {useState} from 'react';

import {
  Container,
  ServiceImg,
  VoucherTitle,
  VoucherDetails,
  ColumnDiv,
  VoucherOldPrice,
  VoucherPrice,
  RowDiv,
  PriceDiv,
  DetailsDiv,
} from './styles';

import serviceIMG from '../../assets/service.png';

export default function Voucher(props) {
  const [selected, setSelected] = useState(false);

  async function handleSelect() {
    if (selected) setSelected(false);
    else setSelected(true);
  }

  return (
    <Container border-color={selected ? '#6FCF97, 100%' : 'ccc'}>
      <RowDiv>
        <ServiceImg source={serviceIMG}></ServiceImg>
        <DetailsDiv>
          <VoucherTitle>{props.title}</VoucherTitle>

          <VoucherDetails>Válido até: {props.validity}</VoucherDetails>

          <VoucherDetails> Restam: {props.remain}</VoucherDetails>
        </DetailsDiv>
        <PriceDiv>
          <VoucherOldPrice>{props.oldPrice}</VoucherOldPrice>
          <VoucherPrice onPress={handleSelect}>R${props.price}</VoucherPrice>
        </PriceDiv>
      </RowDiv>
    </Container>
  );
}
