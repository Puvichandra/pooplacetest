import React , {useState} from 'react'
import classes from '../claimrewards/claimrewards.module.css'
import {AiFillCloseCircle} from 'react-icons/ai'

const Claimrewards = (props) => {


  return (
    <div className={`${classes.claimrewards} ${classes.container}`}  style={{display : props.isActive ? "flex" : "none"}}>
        <div className={classes.content__wrapper}>
        <h1>Claim Rewards</h1>
        <div className={classes.claim__wrapper}>
            <div className={classes.to__claim}>
            <h2>To Claim</h2>
            <h3>{parseInt(props.poochain)} $PooP</h3>
            </div>

            {/* <div className={classes.claim__value}>
            <h2>Claim Value</h2>
            <h3>10$</h3>
            </div> */}
        </div>
        {props.poochain>0?<button  onClick={props.rewardsfunc}>CLAIM</button>: <button disabled>CLAIM</button>}
    <AiFillCloseCircle className={classes.claim__close} onClick={props.closeFunc} />
    </div>
    </div>  

  )
}

export default Claimrewards