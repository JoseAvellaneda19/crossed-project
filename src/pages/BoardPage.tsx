import React, { FC } from 'react'
import 'rsuite/dist/styles/rsuite-dark.css'
import { Container, Header, Sidebar, Content, Panel } from 'rsuite'
import { useSelector } from 'react-redux'
import  AppHeader from '../components/AppHeader/AppHeader'
import  AppSideNav  from '../components/AppSideNav/AppSideNav'
import Dashboard from '../components/Dashboard/Dashboard'
import Users from '../components/Users/User'
import { SIDE_NAV_TABS } from '.././app/constants'
import CSS from 'csstype'
import { appSideNavSelector } from '../features/appSideNavSlice'

const contentStyle: CSS.Properties = {
  padding: '20',
}

const BoardPage: FC = () => {
  const selectedTab = useSelector(appSideNavSelector)
  console.log({ selectedTab })

  return (
    <div data-testid='BoardPageID'>
      <Container>
        <Header>
          <AppHeader />
        </Header>
        <Container>
          <Sidebar>
            <AppSideNav />
          </Sidebar>
          <Content style={contentStyle}>
            <Panel header="Content" bordered>
              {selectedTab === SIDE_NAV_TABS.DASHBOARD && <Dashboard />}
              {selectedTab === SIDE_NAV_TABS.USERS && <Users />}
            </Panel>
          </Content>
        </Container>
      </Container>
    </div>
  )
}

export default BoardPage
