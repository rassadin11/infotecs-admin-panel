import styled from 'styled-components';
import { Typography } from 'antd';
import { TextProps } from './types';

export const ModalTitle = styled(Typography.Paragraph) <TextProps>`
  font-weight: ${({ $bold }) => ($bold ? 600 : 400)};
  font-size: ${({ $fontSize }) => $fontSize || '1rem'};
  margin-bottom: 1.5rem!important;
`;
