// shared/ui/Button/styles.ts
import styled from 'styled-components';
import { Button as AntButton } from 'antd';
import { CustomButtonProps } from './types';

export const Button = styled(AntButton) <CustomButtonProps>`
  font-size: ${({ $fontSize }) => ($fontSize ? `${$fontSize}px` : '1rem')};
  box-shadow: none;
`;
