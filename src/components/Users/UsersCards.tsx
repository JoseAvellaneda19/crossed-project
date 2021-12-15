import React from 'react'
import { useSelector } from 'react-redux'
import { Row, Col } from 'rsuite'
import { usersDataSelector } from '../../features/usersSlice'
import PanelComponent from './UsersPanel'
const   UsersCards = () => {
  const data = useSelector(usersDataSelector)

  return (
    <Row className="show-grid" data-testid='UsersCardsID' key={data[0].email}>
      {data.map(({ id, email, name }) => (
        <Col xs={4} key={id}>
          <PanelComponent id={id} email={email} name={name} />
        </Col>
      ))}
    </Row>
  )
}

export default  UsersCards
