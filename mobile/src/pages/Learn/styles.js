import styled from 'styled-components';
import {Image} from 'react-native';

export const Container = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background: #ffffff;
  height: 100%;
`;

export const StyledImg = styled(Image)`
  transform: scale(1);
  margin-top: 6%;
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

  /* Gray 2 */

  color: #4f4f4f;
  margin-top: 12%;
`;

export const Subtitle = styled.Text`
  font-family: Ubuntu;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 17px;
  /* or 113% */

  letter-spacing: -0.303916px;

  /* Gray 2 */

  color: #4f4f4f;
  margin-top: 10%;
`;

export const StyledButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  background-color: #6fcf97;
  width: 100%;
  height: 10%;
  border-radius: 6px;
  margin-top: 20%;
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
