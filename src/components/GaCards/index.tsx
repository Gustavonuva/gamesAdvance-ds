import React, { ReactNode } from 'react';
import styled from 'styled-components';

export interface CardProps {
  children: ReactNode;
}

const CardStyled = styled.div`
  padding: 48px;
  background: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10ps;
`;

export const GaCards = ({ children }: CardProps) => {
  return <CardStyled>{children}</CardStyled>;
};
