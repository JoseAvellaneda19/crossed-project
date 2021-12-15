import React from 'react';
import { Meta, Story } from '@storybook/react';
import ReduxProvider from '../../testing/ReduxProvider';
import PanelComponent, { PanelProps } from '../../components/Dashboard/DashboardPanel'

const meta: Meta = {
    title: '[component]/DashboardPanel',
    component: PanelComponent
}

export default meta;
const Template: Story<PanelProps> = (args) =><ReduxProvider><PanelComponent {...args} /></ReduxProvider>;
export const PanelComponentComp = Template.bind({});
PanelComponentComp.args = {
    id: 'id',
    name: 'Mr. Robot',
    Amount: 'Amount',
    Locale: 'Locale'
}

