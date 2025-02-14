import React from 'react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { Text, TextTheme } from './Text';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: 'Title Title Title',
    text: 'Description Description Description',
};

export const Error = Template.bind({});
Error.args = {
    title: 'Title Title Title',
    text: 'Description Description Description',
    theme: TextTheme.ERROR,
};

export const onlyTitle = Template.bind({});
onlyTitle.args = {
    title: 'Title Title Title',
};

export const onlyText = Template.bind({});
onlyText.args = {
    text: 'Description Description Description',
};

export const PrimaryDark = Template.bind({});
Primary.args = {
    title: 'Title Title Title',
    text: 'Description Description Description',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyTitleDark = Template.bind({});
onlyTitle.args = {
    title: 'Title Title Title',
};
onlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyTextDark = Template.bind({});
onlyText.args = {
    text: 'Description Description Description',
};
onlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];
