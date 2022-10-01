 
import { data } from 'autoprefixer';
import axios from 'axios'
import { useState } from 'react';


export default function Claimpage() {

    const [pooprice,setPooPrice] = useState('')
    const [bnbprice,setBnbPrice] = useState('')
    const [noofpoo,setNoOfPoo] = useState('')

 

const pancakePrice= async ()=>{
 
     await axios.get("https://api.pancakeswap.info/api/v2/tokens/0xa1611e8d4070dee36ef308952cf34255c92a01c5").then((res)=>setPooPrice(res.data.data.price))
     await axios.get("https://api.pancakeswap.info/api/v2/tokens/0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c").then((res)=>setBnbPrice(res.data.data.price))
 }

 const findpoocoinnumbers=()=>{
 if(pooprice && bnbprice){
 let inp= document.getElementById("bnb").value
 const bnbToUsd = inp*bnbprice;
 setNoOfPoo((bnbToUsd/pooprice).toFixed(2))

 }
 }



  return (



<div className='m-10 border-x-fuchsia-400'>
   <button className='bg-black p-5 m-5' onClick={()=>{pancakePrice();}}> get price</button>
   <h5 className='m-5'>PooChain Coin Price:{pooprice}</h5>
   <h5 className='m-5'>BNB Coin Price:{bnbprice}</h5>
   <h5 className='m-5'>Number of PooCoin:{noofpoo}</h5>
  <div>
    <input id="bnb"  onChange={findpoocoinnumbers} className='m-5 text-black text-center' type="number"></input>
  </div>
  <div>
    <button> Number of Poochain Coin</button>
  </div>
</div>
   
  )
}
