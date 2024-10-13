import styled, { css } from "styled-components";
import { Input } from "../../elements/Input";

export const FieldSetStyle = styled.fieldset`
    all: unset;
    width: 100%;
    margin-top: 8px;
`;

export const InputStyle = styled(Input)`
    &:focus {
        & + span {
            top: -18px;
        }
    }
    
    &.fulfilled {
        & + span {
            top: -12px;
        }
    }
`;

export const LabelStyle = styled.label`
    position: relative;
`;

export const SpanStyle = styled.span<{ type: string }>`
    ${({ type }) =>
        type !== 'radio' && type !== 'checkbox' && css`
            top: 4px;
            z-index: 2;
            left: 10px;
            color: #999;
            cursor: text;
            padding: 0 4px;
            font-size: 12px;
            background: #fff;
            font-weight: bold;
            position: absolute;
            transition: all .3s ease;`
    }
`;

export const LabelError = styled.span`
    color: ${({ theme }) => theme.errorColor};
    font-size: 12px;
    margin-left: 4px;
`;
