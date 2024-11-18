import React, { useEffect, useState } from 'react'
import { useStateValue } from '../StateProvider/StateProvider'

function Orders() {
  const [{basket,user}]=useStateValue
  const [order,setorder]=useState([])
  useEffect(()=>{
    if(user){
      db.collection('user').
      doc(user?.uid).
      collection('orders')
      .orderdBy('created','des')
      .onSnapshot((snap)=>{
        setorder(
          snap.doc.map((doc)=>{
            id:doc.id
            data:doc.data()
  
          })
        )
  
      })

    }else{
      setorder([])
    }
   
    
  },[user])
  return (
    <div>
        <h1>orders</h1>
        {
          order?.map((order)=>{
            return 
            <Order order={order}/>
          })
        }
      
    </div>
  )
}

export default Orders
