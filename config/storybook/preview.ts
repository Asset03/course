import type { Preview } from '@storybook/react';
import { withThemeByClassName } from '@storybook/addon-themes';
import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator/RouterDecorator';
import '../../src/app/styles/index.scss';

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
    decorators: [
        RouterDecorator,
        withThemeByClassName({
            themes: {
                dark: 'dark',
                light: 'light',
            },
            defaultTheme: 'light',
            parentSelector: '.app',
        }),
    ],

};

export default preview;
