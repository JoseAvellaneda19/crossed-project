import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addFoodToCustomer } from '../features/customerSlice';
import '../App.css'


export interface CustomerCardProps{
  id: string;
  name: string;
  food: string[];
}

const CustomerCard = ({id, name, food}: CustomerCardProps) => {

  const dispatch = useDispatch();
  const [customerFoodInput, setCustomerFoodInput] = useState('')

  const handleCustomerFood = () => {
    if(!customerFoodInput)return; 
    dispatch(addFoodToCustomer({ id, food: customerFoodInput}));
    setCustomerFoodInput('')
  }

    return (      
        <div className="customer-food-card-container">
            <p>{name}</p>
            <div className="customer-foods-container">
              <div role='contentinfo' className="customer-food">
                {food.map((foods, index) => {
                  return <p key={index}>{foods}</p>
                })}
              </div>
              <div className="customer-food-input-container">
                <input data-testid='CustomerCardInputID' value={customerFoodInput} onChange={(e) => setCustomerFoodInput(e.target.value)} />
                <button data-testid='CustomerCardButtonID' onClick={handleCustomerFood}>Add</button>
              </div>
            </div>
        </div>
    )
}

export default CustomerCard


