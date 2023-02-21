import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const BotaoStyled = styled.button`
  background: #002f52;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  border: none;
  cursor: pointer;
  color: #fff;
  width: 28px;
  height: 28px;
  border-radius: 50%;
`;

const SpanStyled = styled.span`
  font-size: 18px;
  line-height: 27px;
  display: inline-block;
  margin: 0 12px;
  color: #002f52;
  font-family: Arial, Helvetica, sans-serif;
`;

const FlexContainerStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContainerStyled = styled.div`
  width: 100px;
  text-align: center;
  display: inline-block;
`;

const LabelStyled = styled.label`
  color: #002f52;
  display: block;
  font-weight: 700;
  font-size: 16px;
  font-family: Arial, Helvetica, sans-serif;
  margin-bottom: 8px;
`;

export interface GaInputQuantidadeProps {
  onChange?: (value: number) => void;
}

export const GainputQuantidade = ({ onChange }: GaInputQuantidadeProps) => {
  const [value, setValue] = useState(1);

  useEffect(() => {
    if (onChange) {
      onChange(Number(value));
    }
  }, [value]);
  return (
    <ContainerStyled>
      <LabelStyled>Quantidade</LabelStyled>
      <FlexContainerStyled>
        <BotaoStyled onClick={() => setValue(prev => prev - 1)}>-</BotaoStyled>
        <SpanStyled>{value}</SpanStyled>
        <BotaoStyled onClick={() => setValue(prev => prev + 1)}>+</BotaoStyled>
      </FlexContainerStyled>
    </ContainerStyled>
  );
};
