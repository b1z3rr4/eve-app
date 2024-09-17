import styled from "styled-components";
import { Paragraph } from "../../elements/Paragraph";

export const AppLogo = styled(Paragraph)`
    padding: 12px;
    font-size: 32px;
    font-weight: 600;
    color: ${({ theme }) => theme.primaryColor};
`;
