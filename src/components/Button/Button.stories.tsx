import type { Meta, StoryObj } from '@storybook/react';

import Button from './Button';
/**
 * hello
 */
const meta: Meta<typeof Button> = {
    title: 'Example/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        label: { control: 'text' },
    },

};

export default meta;
type Story = StoryObj<typeof meta>;
export const Primary: Story = {
    args: {
        label: 'Button',
    },
};

export const Secondary: Story = {
    args: {
        label: 'Button',
    },
};



