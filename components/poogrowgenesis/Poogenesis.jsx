
import classes from './poogenesis.module.css'
import Connect from '../connectwallet/Connectwallet'
import Mintingbanner from '../mintingbanner/Mintingbanner'
import Mintingsection from '../mintingsection/Mintingsection'

import styles from '../../styles/containerstyle.module.css';
import { useEffect , useState } from 'react'
import Claimrewards from '../claimrewards/Claimrewards'


const Poogenesis = (props) => {
  
  const [activeClaim , setActiveClaim] = useState(false)

  const toggleClaim = () => {
      setActiveClaim(!activeClaim)
  }
  //const totalMinted = 340; 
  //const price = 2.4;
  const addr=props.address;

 
 

  return (
    <div className={`${classes.poogenesis} ${styles.container}`}  style={{display: `${props.display}`}} >
      <div className={`${classes.top} ${styles.container}`}>
      <button className={classes.claimbtn} onClick={toggleClaim} >Claim Rewards</button>
      <Connect address={props.address} connect={props.connect} walletdiscon={props.walletdiscon} walletswitch={props.walletswitch}/>
      </div>
      <Mintingbanner poster='img/testposter.png' />
      <Mintingsection  totalMinted={Number(props.totminted)} price={props.price} totsupply={props.totsupply} 
       sale={props.sale} mint={props.mint} noofnft={props.noofnft} address={props.address} pageno={props.pageno} />
       <Claimrewards isActive={activeClaim} closeFunc={toggleClaim} poochain={props.poochain} rewardsfunc={props.rewardsfunc}/>

    </div>
  )
}

export default Poogenesis