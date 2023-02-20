import React from 'react';
import { GaInputText, GaInputTextProps } from '../src/components/GaInputText';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Componentes/GaInputText',
  component: GaInputText,
  argTypes: {
    label: {
      control: 'text',
    },
  },
  parameters: { actions: { argsTypesRegex: '^on.*' } },
} as ComponentMeta<typeof GaInputText>;

const Template: ComponentStory<typeof GaInputText> = args => (
  <GaInputText {...args} />
);

export const GaInputTextComponent = Template.bind({});

GaInputTextComponent.args = {
  label: 'E-mail',
} as GaInputTextProps;
