import { styling } from "@/application/libs/styling";
import { Paragraph } from "@/presentation/components/elements/Paragraph";

export const AppLogo = styling(Paragraph) <{ fontSize: number }>`
    padding: 12px;
    font-size: ${({ fontSize }) => fontSize}px;
    font-weight: 600;
    color: ${({ theme }) => theme.primaryColor};
    font-family: ${({ theme }) => theme.poppinsFont};
`;
