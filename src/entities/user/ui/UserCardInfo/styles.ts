import { Avatar, Card } from "antd";
import styled from "styled-components";

export const CardStyles = styled(Card)`
    border-top: 0;
    border-left: 0;
    border-right: 0;
    border-radius: 0;
    max-width: 85vw;

    & > div {
        padding: 1rem!important;
    }

    &:last-child {
        border-bottom: 0;
    }
`

export const AvatarStyles = styled(Avatar)`
    cursor: pointer;
`