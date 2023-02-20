import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { GaCards } from '../src/components/GaCards';

export default {
  title: 'Componentes/GaCards',
  componetes: GaCards,
} as ComponentMeta<typeof GaCards>;

export const cardComponent = () => {
  return (
    <GaCards>
      <h1>Ola, eu sou um card</h1>
    </GaCards>
  );
};
