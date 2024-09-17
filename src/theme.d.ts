import 'styled-components';

export interface Theme {
    primaryColor: string;
    secondaryColor: string;
    backgroundColor: string;
    surfaceColor: string;
    accentColor: string;
    textColor: string;
    mutedTextColor: string;
    errorColor: string;
    borderColor: string;
    poppinsFont: string;
    poppinsSize: string;
    poppinsLineHeight: number;
    poppinsLetterSpacing: string;
    robotoFont: string;
    robotoSize: string;
    robotoLineHeight: number;
    robotoLetterSpacing: string;
}

declare module 'styled-components' {
    export interface DefaultTheme extends Theme { }
}
