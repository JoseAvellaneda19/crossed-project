import React from 'react';
import { Meta, Story } from '@storybook/react';
import ReduxProvider from '.././testing/ReduxProvider';
import Page404 from '../pages/Page404';

const meta: Meta = {
    title: '[pages]/Page404',
    component: Page404
}

export default meta;
const Template: Story = () =><ReduxProvider><Page404 /></ReduxProvider>;
export const Page404Comp = Template.bind({});
