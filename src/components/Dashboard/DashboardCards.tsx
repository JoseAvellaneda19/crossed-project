import { FC } from 'react'
import { useSelector } from 'react-redux'
import { Row, Col } from 'rsuite'
import { dashboardDataSelector } from '../../features/dashboardSlice'
import DashboardPanel from './DashboardPanel'

const DashboardCards: FC = () => {
  
  const data = useSelector(dashboardDataSelector)

  return (  
    <Row data-testid='DashboardCardsID'  key={data[0].name}>
      {data.map(({ id, name, Locale, Amount} ) => (
        <Col xs={4} key={id}>
          <DashboardPanel id={id} name={name} Locale={Locale} Amount={Amount} />
        </Col>
      ))}
    </Row>
  )
}

export default DashboardCards
