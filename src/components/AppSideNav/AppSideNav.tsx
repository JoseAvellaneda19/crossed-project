import React, { FC } from 'react'
import CSS from 'csstype'
import { useDispatch, useSelector } from 'react-redux'
import { changeSelectedTab, appSideNavSelector } from '../../features/appSideNavSlice'
import 'rsuite/dist/styles/rsuite-dark.css'

import { Sidebar, Sidenav, Nav, Icon } from 'rsuite'
import { SIDE_NAV_TABS } from '../../app/constants'


const headerStyles: CSS.Properties = {
  padding: '18',
  fontSize: '16',
  height: '56',
  background: '#34c3ff',
  color: ' #fff',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
}


const AppSideNav: FC = () => {
  const dispatch = useDispatch()
  const selectedTab = useSelector(appSideNavSelector)
  const changeTab = (tabName: string ) => {
    dispatch(changeSelectedTab(tabName))
  }

  return (
    <Sidebar
      style={{ display: 'flex', flexDirection: 'column' }}
      width={260}
      collapsible

    >
      <Sidenav defaultOpenKeys={['3']} style={{ height: '100vh' }} data-testit='SideNav'>
        <Sidenav.Header>
          <div style={headerStyles}>
            <Icon
              icon="logo-analytics"
              size="lg"
              style={{ verticalAlign: 0 }}
            />
            <span style={{ marginLeft: 12 }}>Get data for...</span>
          </div>
        </Sidenav.Header>
        <Sidenav.Body>
          <Nav>
            <Nav.Item
              data-testid='SideBarDashboardTapID'
              eventKey="1"
              active={selectedTab === SIDE_NAV_TABS.DASHBOARD}
              data-active={selectedTab === SIDE_NAV_TABS.DASHBOARD? 'active': ''}
              icon={<Icon icon="dashboard" />}
              onClick={() => changeTab(SIDE_NAV_TABS.DASHBOARD)}
            >
              {SIDE_NAV_TABS.DASHBOARD}
            </Nav.Item>
            <Nav.Item
            data-testid='SideBarUsersTapID'
              eventKey="2"
              active={selectedTab === SIDE_NAV_TABS.USERS}
              data-active={selectedTab === SIDE_NAV_TABS.USERS? 'active': ''}
              icon={<Icon icon="group" />}
              onClick={() => changeTab(SIDE_NAV_TABS.USERS)}
            >
              {SIDE_NAV_TABS.USERS}
            </Nav.Item>
            <Nav.Item
              data-testid='SideBarReportsTapID'
              eventKey="3"
              active={selectedTab === SIDE_NAV_TABS.REPORTS}
              data-active={selectedTab === SIDE_NAV_TABS.REPORTS? 'active': ''}
              icon={<Icon icon="area-chart" />}
              onClick={() => changeTab(SIDE_NAV_TABS.REPORTS)}
            >
              {SIDE_NAV_TABS.REPORTS}
            </Nav.Item>
            <Nav.Item
              data-testid='SideBarBugRequestsTapID'
              eventKey="4"
              icon={<Icon icon="bug" />}
              active={selectedTab === SIDE_NAV_TABS.BUG_REQUESTS}
              data-active={selectedTab === SIDE_NAV_TABS.BUG_REQUESTS? 'active': ''}
              onClick={() => changeTab(SIDE_NAV_TABS.BUG_REQUESTS)}
            >
              {SIDE_NAV_TABS.BUG_REQUESTS}
            </Nav.Item>
            
          </Nav>
        </Sidenav.Body>
      </Sidenav>
    </Sidebar>
  )
}

export default AppSideNav
