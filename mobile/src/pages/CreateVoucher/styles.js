import styled from 'styled-components';
export const Container = styled.View`
  display: flex;

  padding: 20px 20px 0px 20px;
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
  margin-bottom: 6px;
`;

export const InputName = styled.Text`
  font-family: Ubuntu;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 17px;
  /* identical to box height, or 113% */

  letter-spacing: -0.303916px;

  color: #4f4f4f;
  margin-bottom: 8px;
  margin-top: 10px;
`;

export const StyledInput = styled.TextInput`
  width: 100%;
  border-width: 1px;
  border: 1px solid #4f4f4f;

  border-radius: 6px;
  height: 40px;
  padding: 12px;
`;

export const StyledInputLitter = styled.TextInput`
  width: 100%;
  border-width: 1px;
  border: 1px solid #4f4f4f;

  border-radius: 6px;
  height: 40px;
  padding: 12px;
`;

export const RowDiv = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ColumnDiv = styled.View`
  display: flex;
  flex-direction: column;
`;

export const Description = styled.Text`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 12px;
  /* or 120% */

  letter-spacing: -0.303916px;

  /* Gray 4 */

  margin-left: 14px;
  margin-top: 4px;
  color: #4f4f4f;
`;

export const StyledButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  background-color: #6fcf97;
  width: 100%;
  height: 40px;
  border-radius: 6px;
  margin-top: 15px;
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
