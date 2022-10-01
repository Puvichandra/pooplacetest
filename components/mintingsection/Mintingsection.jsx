import React , {useEffect, useState} from 'react'
import classes from './mintingsection.module.css'
import styles from '../../styles/containerstyle.module.css';

const Mintingsection = (props) => {
  const [caption,setCaption] = useState('');
  const [stat, setStat] = useState();
  const [count , setCount] = useState(0) ;

   //console.log(props)

    useEffect(()=>{
     //console.log("pp",props)
     scapt();
     curStatus();
     //console.log("xx",props.sale)
    },[props.pageno,props.totminted,props.address, props.sale])

    useEffect(() =>{
      props.noofnft(count)
      //console.log("bb", count)
      scapt();
    },[count])

    const add = () =>{
      if(count >= 0 && count < 20){
        setCount(count + 1);
        } 
    }
    const subtract = () =>{
      if(count > 0){
      setCount(count - 1);
      }
       }

    const scapt=()=>{
 
      if(count<=1 || count===20){
        setCaption("Min:1 Max:20");
      
      } else if (count>1 || count<20){
        setCaption('');
      }
    }


    const  curStatus=()=>{
      if(props.address) {
        if(props.sale) {
          setStat("MINTING IS LIVE")
        } else {
          setStat("SALE-NOT ACTIVE")
        }
      } else if (props.address===undefined||!props.address){
        setStat("Connect Wallet")
      }
    }


    const showPrice = (count* props.price).toFixed(3);
 
    

  return (
    <div className={`${classes.minting__section} ${styles.container}`}>
        <div className={`${classes.left__minting} ${styles.container}`}>
            <div className={classes.mint__content}>
            <h1>{stat}</h1>

            <h3>Total Minted {props.totalMinted}/{Number(props.totsupply)}</h3>
            </div>
            <div className={classes.mint__count}>
                <button onClick={subtract}>-</button>
                <h1 onChange={()=>scapt()}>{count}</h1>
                <button onClick={add}>+</button>
            </div>
         
            {props.sale?
            <button className={classes.mint__btn} onClick={()=>{props.mint();}}> MINT</button>:
            <button className={classes.mint__btn} disabled onClick={()=>{props.mint();}}> MINT</button>}

            {caption ?  <div className='text-xs text-white'>{caption} </div>:null}
        </div>


        <div className={classes.right__minting}>
            {/* //<h1>{Number(showPrice).toFixed(2)} BNB</h1> */}
            <h1>{showPrice} BNB</h1>
        </div>
    </div>
  )
}

export default Mintingsection