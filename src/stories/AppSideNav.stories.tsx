import React from 'react';
import { Meta, Story } from '@storybook/react';
import AppSideNav from '../components/AppSideNav/AppSideNav';
import ReduxProvider from '.././testing/ReduxProvider';

const meta: Meta = {
    title: '[component]/AppSideNav',
    component: AppSideNav
}

export default meta;
const Template: Story = () =><ReduxProvider><AppSideNav /></ReduxProvider>;
export const AppSideNavComp = Template.bind({});