import styled from "styled-components";
import { Input as AntInput } from "antd";

export const Input = styled(AntInput)`
    border: 1px solid #a4a4a4;

    &::placeholder {
        color: #a4a4a4;
    }
`

export const PasswordInput = styled(AntInput.Password)`
    border: 1px solid #a4a4a4;

    & input::placeholder {
        color: #a4a4a4;
    }
`;