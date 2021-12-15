import React, { FC } from 'react'
import { Navbar, Nav } from 'rsuite'
import 'rsuite/dist/styles/rsuite-dark.css'

const AppHeader: FC = () => {
  return (
    <Navbar data-testid='AppHeader'>
      <Navbar.Body>
        <Nav>
          <Nav.Item>CreatyAsyncThunk</Nav.Item>
        </Nav>
      </Navbar.Body>
    </Navbar>
  )
}

export default AppHeader
