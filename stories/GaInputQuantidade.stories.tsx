import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import {
  GainputQuantidade,
  GaInputQuantidadeProps,
} from '../src/components/GaInputQuantidade';

export default {
  title: 'componentes/GainputQuantidade',
  component: GainputQuantidade,
  parameters: { actions: { argsTypesRegex: '^on.*' } },
} as ComponentMeta<typeof GainputQuantidade>;

const Template: ComponentStory<typeof GainputQuantidade> = args => (
  <GainputQuantidade {...args} />
);

export const GaInputQuantidadeComponent = Template.bind({});

GaInputQuantidadeComponent.args = {
  label: 'Quantidade de items',
} as GaInputQuantidadeProps;
