
import customerSlice, { addFoodToCustomer } from "../../features/customerSlice";

  it("should pass the initial data to the customer's food", () => {
  const initialState= {
    value: [{
      name: 'Klim',
      id: 'Hello',
      food: []
    }]
  }
  const foodAdded = {
    id:'Hello',
    food: 'rice'
  }

  const expectedResult = {   
    value: [{
      food: ['rice'],
      id: 'Hello',
      name: 'Klim'
    }]
  }
  expect(customerSlice(initialState, addFoodToCustomer(foodAdded))).toEqual(expectedResult)
  })

