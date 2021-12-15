import React from 'react';
import { Meta, Story } from '@storybook/react';
import CustomLink, { Props } from '../components/Button/CustomLink'

const meta: Meta = {
    title: '[component]/CustomLink',
    component: CustomLink
}

export default meta;

const Template: Story<Props> = (args) => <CustomLink {...args} />;

export const RestLink = Template.bind({});
RestLink.args = {
    label: 'RESTAURANT APP',
    to: 'restaurant'
}

export const AboutLink = Template.bind({});
AboutLink.args = {
    label: 'ABOUT US',
    to: 'about'
}

export const HomeLink = Template.bind({});
HomeLink.args = {
    label: 'HOME',
    to: ''
}