import React from 'react'
import { Panel } from 'rsuite'

export interface PanelProps{
    id: string;
    name: string;
    email: string
}
const PanelComponent = ({ name, email }: PanelProps) => {
    return (
      <Panel header={<h3>Panel</h3>} shaded bordered data-testid='PanelID'>
      <ul>
        <li>
          email: <b>{email}</b>
        </li>
        <li>
          name: <b>{name}</b>
        </li>
      </ul>
    </Panel>
    )
}

export default PanelComponent