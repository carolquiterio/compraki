import styled from 'styled-components';
import {Image} from 'react-native';

export const Container = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background: #ffffff;
`;

export const StyledImg = styled(Image)`
  transform: scale(1);
  margin-top: 2%;
`;

export const StyledImgProgess = styled(Image)`
  margin-top: 10%;
`;

export const Title = styled.Text`
  font-family: Ubuntu;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 32px;
  /* or 133% */

  text-align: center;
  letter-spacing: -0.303916px;

  /* Cor 1 */

  color: #17298b;
  margin-top: 12%;
`;

export const Subtitle = styled.Text`
  font-family: Ubuntu;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 20px;
  /* or 111% */

  text-align: center;
  letter-spacing: -0.303916px;

  /* Gray 3 */

  color: #828282;
  margin-top: 10%;
`;

export const StyledButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  background-color: #6fcf97;
  width: 100%;
  height: 9%;
  border-radius: 6px;
  margin-top: 12%;
`;

export const StyledButtonText = styled.Text`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  /* identical to box height, or 62% */

  text-align: center;
  letter-spacing: -0.303916px;

  color: #ffffff;
`;

export const TextView = styled.View`
  display: flex;
  padding-right: 16%;
  padding-left: 16%;
`;
