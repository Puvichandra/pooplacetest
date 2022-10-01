
import classes  from  './topnav.module.css'
import {BiSearchAlt} from 'react-icons/bi'
import Connect from '../connectwallet/Connectwallet'
import styles from '../../styles/containerstyle.module.css';

const topnav = (props) => {
  return (
    <div className={`${classes.topnav} ${styles.container}`}>
      <div className={classes.search__collection}>
        <BiSearchAlt className={classes.search__icon} />
        <input type="Search" placeholder='Search NFT Collections' />
      </div>

      <Connect address={props.address} connect={props.connect} walletdiscon={props.walletdiscon} walletswitch={props.walletswitch} />
    </div>
  )
}

export default topnav