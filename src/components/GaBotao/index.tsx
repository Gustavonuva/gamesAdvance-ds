import React from 'react';
import styled, { css } from 'styled-components';

export interface GaBotaoProps {
  texto?: string;
  tipo?: 'primario' | 'secundario';
  onClick?: () => void;
}

const BotaoEstilizado = styled.button<GaBotaoProps>`
  background: ${(props: GaBotaoProps) =>
    props.tipo === 'primario' ? '#EB9B00' : '#FFF'};
  padding: 16px 32px;
  border: 2px solid #eb9b00;
  color: ;
  font-size: 20px;
  cursor: pointer;
  color: ${(props: GaBotaoProps) =>
    props.tipo === 'primario' ? '#fff' : '#EB9B00'};
  ${(props: GaBotaoProps) =>
    props.tipo === 'primario'
      ? css`
          &:hover {
            background: #b87900;
            border: 2px solid #b87900;
          }
        `
      : css`
          &:hover {
            background: #fff;
            border: 2px solid #b87900;
            color: #b87900;
          }
        `}
`;

export const GaBotao = ({
  texto,
  onClick,
  tipo = 'primario',
}: GaBotaoProps) => {
  return (
    <BotaoEstilizado onClick={onClick} tipo={tipo}>
      {texto}
    </BotaoEstilizado>
  );
};
