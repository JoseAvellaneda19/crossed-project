import reservationSlice, { addReservation} from "../../features/reservationSlice";

  it('should add a name to the reservations list using the reservationSlice', () => {
  const previousState = {
    value: []
  };
  expect(reservationSlice(previousState, addReservation('Klim'))).toEqual(
    {
      value: ['Klim']
    }
  )
  })   

