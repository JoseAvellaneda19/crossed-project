import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Placeholder, Message } from 'rsuite'
import { HTTP_STATUS } from '../../app/constants'
import { fetchDashboardData, dashboardLoadingSelector, dashboardErrorMessageSelector } from '../../features/dashboardSlice'
import DashboardCards from './DashboardCards'
import { unwrapResult } from '@reduxjs/toolkit'
import { useAppDispatch } from '../../app/store'

const Dashboard = () => {
  const dispatch = useAppDispatch()
  const loading = useSelector(dashboardLoadingSelector)
  const errorMessage = useSelector(dashboardErrorMessageSelector)

  useEffect(() => {
    dispatch(fetchDashboardData()).then(unwrapResult).then((obj: any) => console.log({obj})).catch((obj: any) => console.log({objError: obj}))
  }, [dispatch])

  return (
    <div>
      {loading === HTTP_STATUS.PENDING && (
        <Placeholder.Paragraph style={{ marginTop: 30 }} rows={5} active />
      )}
      {loading === HTTP_STATUS.REJECTED && (
        <Message
          data-testid='errorMessageID'
          showIcon
          closable
          type="error"
          title="Error"
          description={errorMessage || 'Error- no message to display'}
        />
      )}
      {loading === HTTP_STATUS.FULFILLED && (
        <>
          <Message
            data-testid='successMessageID'
            showIcon
            closable
            type="success"
            title="Success"
            description="Fetched data correctly"
          />
          <DashboardCards />
        </>
      )}
    </div>
  )
}

export default Dashboard
