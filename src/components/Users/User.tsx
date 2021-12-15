import { unwrapResult } from '@reduxjs/toolkit'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Placeholder, Message } from 'rsuite'
import { HTTP_STATUS } from '../../app/constants'
import { useAppDispatch } from '../../app/store'
import { fetchUsersData, usersLoadingSelector, usersErrorMessageSelector } from '../../features/usersSlice'

import UsersCards from './UsersCards'

const Users = () => {
  const dispatch = useAppDispatch()
  const loading = useSelector(usersLoadingSelector)
  const errorMessage = useSelector(usersErrorMessageSelector)


  useEffect(() => {
    dispatch(fetchUsersData()).then(unwrapResult).then((obj: any) => console.log({obj})).catch((obj: any) => console.log({objError: obj}))
  }, [dispatch])
// USE UNWRAP
  return (
    <div>
      {loading === HTTP_STATUS.PENDING && (
        <Placeholder.Paragraph style={{ marginTop: 30 }} rows={5} active />
      )}
      {loading === HTTP_STATUS.REJECTED && (
        <Message
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
            showIcon
            closable
            type="success"
            title="Success"
            description="Fetched data correctly"
          />
          <UsersCards />
        </>
      )}
    </div>
  )
}

export default Users
