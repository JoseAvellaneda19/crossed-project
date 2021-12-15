import React from 'react';
import { Meta, Story } from '@storybook/react';
import ReduxProvider from '.././testing/ReduxProvider';
import CustomerCard, { CustomerCardProps } from '../components/CustomerCard'

const meta: Meta = {
    title: '[component]/CustomerCard',
    component: CustomerCard
}

export default meta;
const Template: Story<CustomerCardProps> = (args) =><ReduxProvider><CustomerCard {...args} /></ReduxProvider>;
export const CustomerCardComp = Template.bind({});
CustomerCardComp.args = {
    id: 'id',
    name: 'Mr. Robot',
    food: ['rice', 'sushi']
}
