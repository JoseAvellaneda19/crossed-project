import React from 'react';
import { Meta, Story } from '@storybook/react';
import ReduxProvider from '.././testing/ReduxProvider';
import About from '../pages/About';

const meta: Meta = {
    title: '[pages]/About',
    component: About
}

export default meta;
const Template: Story = () =><ReduxProvider><About /></ReduxProvider>;
export const AboutPage = Template.bind({});
