import React from 'react';
import { Meta, Story } from '@storybook/react';
import AppHeader from '../components/AppHeader/AppHeader';


const meta: Meta = {
    title: '[component]/AppHeader',
    component: AppHeader
}


export default meta;
const Template: Story = () => <AppHeader />;
export const AppHeaderComp = Template.bind({});