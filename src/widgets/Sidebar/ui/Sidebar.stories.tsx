import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import Sidebar from './Sidebar';

const meta: Meta<typeof Sidebar> = {
    title: 'widget/Sidebar',
    component: Sidebar,
    parameters: {
        // layout: 'centered',
    },
    tags: ['autodocs'],
    // args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

export const Primary: Story = {
    args: {
    },
};
