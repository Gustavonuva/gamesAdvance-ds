import React from 'react';
import { GaBotao, GaBotaoProps } from '../src';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Componentes/AbBotao',
  component: GaBotao,
} as ComponentMeta<typeof GaBotao>;

const Template: ComponentStory<typeof GaBotao> = args => <GaBotao {...args} />;

export const Primario = Template.bind({});

Primario.args = {
  texto: 'Ab Botao Primario',
  tipo: 'primario',
} as GaBotaoProps;

export const Secundario = Template.bind({});

Secundario.args = {
  texto: 'Ab Botao Secundario',
  tipo: 'secundario',
} as GaBotaoProps;
