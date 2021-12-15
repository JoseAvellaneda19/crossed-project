import React from 'react';
import { Meta, Story } from '@storybook/react';
import ReduxProvider from '../../testing/ReduxProvider';
import UsersPanel, { PanelProps } from '../../components/Users/UsersPanel'

const meta: Meta = {
    title: '[component]/UsersPanel',
    component: UsersPanel
}

export default meta;
const Template: Story<PanelProps> = (args) =><ReduxProvider><UsersPanel {...args} /></ReduxProvider>;
export const UsersPanelComp = Template.bind({});
UsersPanelComp.args = {
    name: 'Klim',
    email: 'roboto@gmail.com'
}
