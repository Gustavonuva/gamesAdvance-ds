import React from 'react';
import { GaTags, GaTagsProps } from '../src/components/GaTags';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Componentes/GaTags',
  component: GaTags,
} as ComponentMeta<typeof GaTags>;

const Template: ComponentStory<typeof GaTags> = args => <GaTags {...args} />;

export const Primario = Template.bind({});

Primario.args = {
  texto: 'tag',
} as GaTagsProps;
