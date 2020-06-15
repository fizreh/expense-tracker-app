import React,{useState,useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
  const {addTransaction} = useContext(GlobalContext);
  
    
  
    const [text,setText] = useState('');
    const [amount,setAmount] = useState(0);
    const onSubmit =e=>{
      e.preventDefault();
      if(amount=== 0 || amount ==='')
      return alert('Please enter the amount. Please dont forget to add signs');
      const newTransaction = {
        id:Math.floor(Math.random()*100000000),
        text,
        amount:+amount,

      }
      if(newTransaction.text === '')
      newTransaction.text = 'Anonymous';  
      if(newTransaction.amount=== 0 || newTransaction.amount ==='')
      return alert('Ooops! You forgot to add the amount.Please delete your entry and try agqain');
      
      addTransaction(newTransaction);
      setText('');
      setAmount('');
            
      
    }
   
    
    return (
        <div>
             <h3>Add new transaction</h3>
      <form onSubmit = {onSubmit} id= "create-course-form">
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input id='inputText' type="text" value={text} onChange={(e)=>setText(e.target.value)}  placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >Amount <br />
            (negative - expense, positive - income)</label
          >
          <input id='mainInput' type="number" value={amount} onChange={(e)=>setAmount(e.target.value)}  placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
        </div>
    )
}
