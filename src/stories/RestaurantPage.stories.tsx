import React from 'react';
import { Meta, Story } from '@storybook/react';
import ReduxProvider from '.././testing/ReduxProvider';
import RestaurantPage from '../pages/restaurantPage';

const meta: Meta = {
    title: '[pages]/RestaurantPage',
    component: RestaurantPage
}

export default meta;
const Template: Story = () =><ReduxProvider><RestaurantPage /></ReduxProvider>;
export const RestaurantPageComp = Template.bind({});
