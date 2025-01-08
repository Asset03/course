import type { Meta, StoryObj } from '@storybook/react';

import { NotFoundPage } from './NotFoundPage';

const meta: Meta<typeof NotFoundPage> = {
    title: 'pages/NotFoundPage',
    component: NotFoundPage,
    parameters: {
    },
    tags: ['autodocs'],
    args: {},
};

export default meta;
type Story = StoryObj<typeof NotFoundPage>;

export const Normal: Story = {
};
