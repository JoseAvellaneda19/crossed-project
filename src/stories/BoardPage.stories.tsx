import React from 'react';
import { Meta, Story } from '@storybook/react';
import ReduxProvider from '.././testing/ReduxProvider';
import BoardPage from '../pages/BoardPage';

const meta: Meta = {
    title: '[pages]/BoardPage',
    component: BoardPage
}

export default meta;
const Template: Story = () =><ReduxProvider><BoardPage /></ReduxProvider>;
export const DashboardPage = Template.bind({});
