import React from 'react';
import { Meta, Story } from '@storybook/react';
import ReduxProvider from '.././testing/ReduxProvider';
import HomePage from '../pages/HomePage';

const meta: Meta = {
    title: '[pages]/HomePage',
    component: HomePage
}

export default meta;
const Template: Story = () =><ReduxProvider><HomePage /></ReduxProvider>;
export const HomePageComp = Template.bind({});
