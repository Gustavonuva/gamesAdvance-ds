import React, { ReactNode } from 'react';
import styled from 'styled-components';

export interface GaModalProps {
  children: ReactNode;
  titulo: string;
  aberta: boolean;
  aoFechar: () => void;
}

const WindowModal = styled.div`
  position: fixed;
  padding: 64px;
  background: #fff;
  box-shadow: 4px 4px 24px -4px rgba(0, 0, 0, 0.15);
  border-radius: 24px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const BottomModal = styled.div`
  position: fixed;
  left: 0px;
  right: 0px;
  top: 0px;
  bottom: 0px;
  background: rgba(101, 101, 101, 0.85);
`;

const TitleModalWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: sans-serif;
  align-items: center;
`;

const TitleModal = styled.h2`
  font-weight: 700;
  font-size: 32px;
  line-height: 48px;
  color: #eb9b00;
  margin: 0;
`;

const ButtonCloseModal = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  color: #002f52;
`;

export const GaModal = ({
  children,
  titulo,
  aberta,
  aoFechar,
}: GaModalProps) => {
  if (!aberta) {
    return <></>;
  }
  return (
    <>
      <BottomModal onClick={aoFechar} />
      <WindowModal>
        <TitleModalWrapper>
          <TitleModal>{titulo}</TitleModal>
          <ButtonCloseModal>X</ButtonCloseModal>
        </TitleModalWrapper>
        {children}
      </WindowModal>
    </>
  );
};
