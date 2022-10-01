
import classes from './nftgrid.module.css'
import Nftcard from '../nftcard/nftcard'
import styles from '../../styles/containerstyle.module.css';

const nftgrid = () => {
  return (
    <div className={`${classes.nftgrid__container} ${styles.container}`}>
        <Nftcard />
        <Nftcard />
        <Nftcard />
        <Nftcard />
        <Nftcard />
        <Nftcard />
        <Nftcard />
        <Nftcard />
        <Nftcard />
        <Nftcard />
    </div>
  )
}

export default nftgrid