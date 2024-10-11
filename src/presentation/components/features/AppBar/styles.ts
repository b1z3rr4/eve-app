import styled from "styled-components";

export const AppBarContainer = styled.div`
    display: flex;
    padding: 6px 12px;
    position: sticky;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid ${({ theme }) => theme.borderColor};
`;

export const MenuContainer = styled.div`
    gap: 16px;
    display: flex;
    cursor: pointer;
    padding: 6px 12px;
    align-items: center;
    text-transform: capitalize;
    border-radius: ${({ theme }) => theme.borderRadius};
    border: 1px solid ${({ theme }) => theme.borderColor};
`;

export const ProfileContainer = styled.div`
    padding: 3px;
    display: flex;
    border-radius: 100%;
    background-color: ${({ theme }) => theme.accentColor};
`;

export const ProfileImg = styled.div<{ src?: string }>`
  width: 10px;
  height: 10px;
  padding: 15px;
  display: flex;
  font-size: 14px;
  border-radius: 50%;
  align-items: center;
  background-size: cover;
  justify-content: center;
  background-position: center;
  color: ${({ theme }) => theme.surfaceColor};
  background-image: url(${(props) => props.src});
  font-family: ${({ theme }) => theme.poppinsFont};
  background-color: ${({ theme }) => theme.textColor};
`;
