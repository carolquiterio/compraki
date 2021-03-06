import styled from 'styled-components';
import {Image} from 'react-native';

export const Container = styled.View`
  border: 1px solid #4f4f4f;
  border-radius: 10px;
  height: 90px;
  margin-top: 16px;
  padding: 10px;
  display: flex;
`;

export const ColumnDiv = styled.View`
  display: flex;
`;
export const RowDiv = styled.View`
  flex-direction: row;
`;

export const ServiceImg = styled(Image)`
  margin-right: 10px;
`;

export const VoucherTitle = styled.Text`
  font-family: Ubuntu;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 17px;

  letter-spacing: -0.303916px;

  color: #4f4f4f;
`;

export const VoucherDetails = styled.Text`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 17px;
  /* or 170% */

  letter-spacing: -0.303916px;

  /* Gray 3 */

  color: #4f4f4f;
`;
export const VoucherOldPrice = styled.Text`
  align-self: flex-end;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 17px;
  /* or 170% */

  letter-spacing: -0.303916px;
  text-decoration-line: line-through;

  color: #4f4f4f;
`;

export const VoucherPrice = styled.Text`
  align-self: flex-end;
  font-family: Ubuntu;
  font-style: normal;
  font-weight: bold;
  font-size: 19px;
  line-height: 17px;
  /* or 89% */

  text-align: right;
  letter-spacing: -1px;

  color: #4f4f4f;
`;

export const PriceDiv = styled.View`
  display: flex;
  flex-direction: column;
  align-self: flex-end;
`;

export const DetailsDiv = styled.View`
  display: flex;
  flex-direction: column;
`;
