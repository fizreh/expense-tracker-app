import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'
import { Transaction } from '../components/Transaction'


export const TransactionList = ({transaction}) => {
  const {transactions} =useContext(GlobalContext);
  
    return (
        <>
             <h3>History</h3>
      <ul className="list">
        {transactions.map(transaction => (<Transaction key= {transactions.id}  transaction = {transaction}/> ))}
        
      </ul> 
        </>
    )
}
