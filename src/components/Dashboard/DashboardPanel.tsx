import React from 'react'
import { Panel } from 'rsuite'

export interface PanelProps{
    id: string;
    name: string;
    Locale: string;
    Amount: string
}

const PanelComponent = ({id, name, Locale, Amount}: PanelProps) => {
    return (
          <Panel header={<h3>Panel</h3>} shaded bordered data-testid='PanelID'>
            <ul>
              <li className='PanelID'>
                id: <b>{id}</b>
              </li>
              <li>
                name: <b>{name}</b>
              </li>
              <li>
                Locale: <b>{Locale}</b>
              </li>
              <li>
                Amount: <b>{Amount}</b>
              </li>
            </ul>
          </Panel>
    )
}

export default PanelComponent
