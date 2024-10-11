import styled from 'styled-components';

export const InputContainer = styled.input`
  width: 100%;
  padding: 10px;
  font-family: ${({ theme }) => theme.robotoFont};
  font-size: ${({ theme }) => theme.robotoSize};
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${({ theme }) => theme.surfaceColor};
  color: ${({ theme }) => theme.textColor};
  margin-bottom: 10px;

  &::placeholder {
    color: ${({ theme }) => theme.mutedTextColor};
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.primaryColor};
    box-shadow: 0 0 5px rgba(0, 119, 182, 0.5);
  }
`;
