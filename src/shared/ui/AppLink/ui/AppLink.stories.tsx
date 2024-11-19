import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import AppLink, { AppLinkTheme } from './AppLink';

const meta: Meta<typeof AppLink> = {
    title: 'shared/AppLink',
    component: AppLink,
    parameters: {
        // layout: 'centered',
    },
    tags: ['autodocs'],
    args: { onClick: fn(), to: '/' },
};

export default meta;
type Story = StoryObj<typeof AppLink>;

export const Primary: Story = {
    args: {
        children: 'Text',
        theme: AppLinkTheme.PRIMARY,
    },
};
export const SECONDARY: Story = {
    args: {
        children: 'Text',
        theme: AppLinkTheme.SECONDARY,
    },
};
export const RED: Story = {
    args: {
        children: 'Text',
        theme: AppLinkTheme.RED,
    },
};
