import React from 'react';
import styled from 'styled-components';

export interface GaInputTextProps {
  label: string;
  placeholder?: string;
  placeholderAlign?: 'left' | 'center' | 'right';
  value: string;
  type?: 'text' | 'email' | 'password' | 'date';
  onChange: (value: string) => void;
  darkmode?: boolean;
}

const LabelStyled = styled.label<{ darkmode: boolean }>`
  color: ${props => (props.darkmode ? '#FFF' : '#002F52')};
  display: block;
  font-weight: 700;
  font-size: 16px;
  font-family: Arial, Helvetica, sans-serif;
  margin-left: 16px;
  margin-bottom: 8px;
`;

const StyledInputText = styled.input<{
  placeholderAlign: string;
  darkmode: boolean;
}>`
  font-size: 16px;
  line-height: 24px;
  color: #002f52;
  padding: 8px 24px;
  border: 1px solid #002f52;
  border-radius: 45px;
  &:focus {
    outline: none;
  }
  width: 100%;
  box-sizing: border-box;
    background: ${props => (props.darkmode ? 'transparent' : '#FFF')};
    border-color: ${props => (props.darkmode ? '#FFF' : '#002F52')};
    text-align: ${props => props.placeholderAlign};
    ::placeholder,
    ::-webkit-input-placeholder  {
        color: ${props => (props.darkmode ? '#FFF' : '#002F52')};
`;

export const GaInputText = ({
  label,
  value,
  onChange,
  type = 'text',
  placeholder = '',
  placeholderAlign = 'left',
  darkmode = false,
}: GaInputTextProps) => {
  return (
    <div>
      {label && <LabelStyled darkmode={darkmode}>{label}</LabelStyled>}
      <StyledInputText
        placeholder={placeholder}
        placeholderAlign={placeholderAlign}
        type={type}
        darkmode={darkmode}
        value={value}
        onChange={event => onChange(event.target.value)}
      />
    </div>
  );
};
