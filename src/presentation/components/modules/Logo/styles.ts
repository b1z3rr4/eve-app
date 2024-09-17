import { styling } from "@/application/libs/styling";
import { Paragraph } from "@/presentation/components/elements/Paragraph";

export const AppLogo = styling(Paragraph)`
    padding: 12px;
    font-size: 32px;
    font-weight: 600;
    color: ${({ theme }) => theme.primaryColor};
`;
