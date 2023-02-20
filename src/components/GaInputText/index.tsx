import React from 'react';
import styled from 'styled-components';

export interface GaInputTextProps {
  label: string;
  value: string;
  type?: 'text' | 'email' | 'password' | 'date';
  onChange: (value: string) => void;
}

const LabelStyled = styled.label`
  color: #002f52;
  display: block;
  font-weight: 700;
  font-size: 16px;
  font-family: Arial, Helvetica, sans-serif;
  margin-left: 16px;
  margin-bottom: 8px;
`;

const StyledInputText = styled.input`
  font-size: 16px;
  line-height: 24px;
  color: #002f52;
  padding: 8px 24px;
  border: 1px solid #002f52;
  &:focus {
    outline: none;
  }
  width: 100%;
  border-radius: 45px;
`;

export const GaInputText = ({
  label,
  value,
  onChange,
  type = 'text',
}: GaInputTextProps) => {
  return (
    <div>
      <LabelStyled>{label}</LabelStyled>
      <StyledInputText
        type={type}
        value={value}
        onChange={event => onChange(event.target.value)}
        placeholder="seuemail@gmail.com.br"
      />
    </div>
  );
};
