import React from 'react';
import { Meta, Story } from '@storybook/react';
import ReduxProvider from '.././testing/ReduxProvider';
import Header, { HeaderProps } from '../components/Header'

const meta: Meta = {
    title: '[component]/Header',
    component: Header
}

export default meta;
const Template: Story<HeaderProps> = (args) =><ReduxProvider><Header {...args} /></ReduxProvider>;
export const HeaderComp = Template.bind({});
HeaderComp.args = {
}
