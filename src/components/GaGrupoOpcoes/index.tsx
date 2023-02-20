import React, { useState } from 'react';
import styled from 'styled-components';

const SectionEslitizado = styled.section<{ selecionado: boolean }>`
  width: 194px;
  height: 88px;
  background: ${props =>
    props.selecionado
      ? 'linear-gradient(97.54deg, #002F52 35.49%, #326589 165.37%)'
      : '#fff'};
  border: 1px solid;
  border-color: ${props => (props.selecionado ? '#002F52' : '#eb9b00')};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
  margin: 10px;
  font-family: sans-serif;
  cursor: pointer;
  header {
    color: ${props => (props.selecionado ? '#fff' : '#eb9b00')};
    font-size: 12px;
    font-wight: 400;
  }

  strong {
    color: ${props => (props.selecionado ? '#fff' : '#eb9b00')};
    font-size: 16px;
    font-weight: 700;
  }

  footer {
    color: ${props => (props.selecionado ? '#fff' : 'rgba(0, 0, 0, 0, 54)')};
    font-size: 12px;
    font-wight: 400;
  }
`;

export interface GaGrupoOpcoesP {
  id: number;
  titulo: string;
  corpo: string;
  rodape: string;
}

export interface GaGrupoOpcoesProps {
  opcoes: GaGrupoOpcoesP[];
  valorPadrao?: GaGrupoOpcoesP | null;
  onChange?: (opcao: GaGrupoOpcoesP) => void;
}

export const GaGrupoOpcoes = ({
  opcoes,
  onChange,
  valorPadrao,
}: GaGrupoOpcoesProps) => {
  const [selecao, setSelecao] = useState<GaGrupoOpcoesP | null>(
    valorPadrao ?? null
  );

  const aoSelecionar = (opcao: GaGrupoOpcoesP): void => {
    setSelecao(opcao);
    if (onChange) {
      onChange(opcao);
    }
  };

  return (
    <>
      {opcoes.map(opcao => (
        <SectionEslitizado
          key={opcao.id}
          selecionado={selecao?.id == opcao.id}
          onClick={() => aoSelecionar(opcao)}
        >
          <header>{opcao.titulo}</header>
          <div>
            <strong>{opcao.corpo}</strong>
          </div>
          <footer>{opcao.rodape}</footer>
        </SectionEslitizado>
      ))}
    </>
  );
};
