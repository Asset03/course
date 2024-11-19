import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import Navbar from './Navbar';

const meta: Meta<typeof Navbar> = {
    title: 'widget/Navbar',
    component: Navbar,
    parameters: {
        // layout: 'centered',
    },
    tags: ['autodocs'],
    // args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const Primary: Story = {
    args: {
    },
};
