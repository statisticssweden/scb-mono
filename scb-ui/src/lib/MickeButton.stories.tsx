import { MickeButton } from './MickeButton'
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof MickeButton> = {
    component: MickeButton,
    tags: ['autodocs']
  };
  
export default meta;

type Story = StoryObj<typeof MickeButton>;

export const test: Story = {
  args: {
    title: "Hej på dig"
  },
};

export const test2: Story = {
    args: {
      title: "Hej då !!"
    },
  };
