import React from 'react';
import { Meta, Story } from '@storybook/react';
import ReduxProvider from '../../testing/ReduxProvider';
import Users from '../../components/Users/User'

const meta: Meta = {
    title: '[component]/Users',
    component: Users
}

export default meta;
const Template: Story = () =><ReduxProvider><Users /></ReduxProvider>;
export const DashboardComp = Template.bind({});