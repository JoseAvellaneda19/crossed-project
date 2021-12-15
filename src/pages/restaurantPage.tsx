import { Fragment, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "../App.css";
import CustomerCard from "../components/CustomerCard";
import Header from "../components/Header";
import ReservationCard from "../components/ReservationCard";
import { addReservation, reservationSelector } from "../features/reservationSlice";
import { customerSelector } from "../features/customerSlice";
import CSS from 'csstype';

function RestaurantPage () {

  const [reservationNameInput, setReservationNameInput] = useState('')

  const reservations = useSelector(reservationSelector)
  const customers = useSelector(customerSelector)

  const dispatch = useDispatch()
  const handleAddReservations = () => {
    if(!reservationNameInput) return;

    dispatch(addReservation(reservationNameInput))
    setReservationNameInput("");
  }

  const styles: CSS.Properties = {
    color: 'white'
  }

  return (
    <Fragment>
    <Header fixed />
    <div className="App" data-testid='RestaurantPageID'>
      
      <div className="container">
        <div className="reservation-container">
          <div>
            <h5 className="reservation-header" style={styles}>Reservations</h5>
            <div className="reservation-cards-container">
              {reservations && reservations.map((name, index) => {
                
                return <ReservationCard name={name} index={index} />
              })}
            </div>
          </div>
          <div className="reservation-input-container">
            <input data-testid='inputRestaurantPageID' value={reservationNameInput} onChange={(e) => setReservationNameInput(e.target.value)} />
            <button onClick={handleAddReservations}>Add</button>
          </div>
        </div>
        <div className="customer-food-container">
          {customers && customers.map((customer => {
            return <CustomerCard id={customer.id} name={customer.name} food={customer.food} />
          }))}
        </div>
      </div>
    </div>
    </Fragment>
  );
}

export default RestaurantPage;