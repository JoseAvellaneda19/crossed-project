import React from 'react';
import { Meta, Story } from '@storybook/react';
import ReduxProvider from '../../testing/ReduxProvider';
import Dashboard from '../../components/Dashboard/Dashboard'

const meta: Meta = {
    title: '[component]/Dashboard',
    component: Dashboard
}

export default meta;
const Template: Story = () =><ReduxProvider><Dashboard /></ReduxProvider>;
export const DashboardComp = Template.bind({});