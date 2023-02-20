import React from 'react';
import { GaGrupoOpcoes, GaGrupoOpcoesProps } from '../src';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Componentes/GaGrupoOpcoes',
  component: GaGrupoOpcoes,
} as ComponentMeta<typeof GaGrupoOpcoes>;

const Template: ComponentStory<typeof GaGrupoOpcoes> = args => (
  <GaGrupoOpcoes {...args} />
);

export const Default = Template.bind({});

Default.args = {
  opcoes: [
    {
      id: 1,
      titulo: 'Midia Fisica',
      corpo: 'R$ 00,00',
      rodape: 'DVD, PenDrive',
    },
    {
      id: 2,
      titulo: 'Midia Digital',
      corpo: 'R$ 00,00',
      rodape: 'Nuvem, PlayStore',
    },
    {
      id: 3,
      titulo: 'Midia Digital + Midia Fisica',
      corpo: 'R$ 00,00',
      rodape: 'Nuvem, PlayStore, DVD, PenDrive',
    },
  ],
} as GaGrupoOpcoesProps;
