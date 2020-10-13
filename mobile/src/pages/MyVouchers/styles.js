import styled from 'styled-components';

export const Container = styled.View`
  display: flex;

  padding: 20px;
  background: #ffffff;
`;

export const Title = styled.Text`
  font-family: Ubuntu;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 32px;
  /* or 133% */

  letter-spacing: -0.303916px;

  /* Gray 2 */

  color: #4f4f4f;
`;

export const Subtitle = styled.Text`
  font-family: Ubuntu;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 20px;
  /* identical to box height, or 111% */

  letter-spacing: -0.303916px;

  /* Gray 3 */

  color: #4f4f4f;
  margin-top: 15px;
`;
