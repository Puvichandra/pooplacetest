
import classes from './mintingbanner.module.css'
import styles from '../../styles/containerstyle.module.css';


const Mintingbanner = (props) => {
  return (
    <div className={`${classes.minting__banner} ${classes.banner__size}  ${styles.container}`}>
        
        <img src={props.poster} alt="poster" className={`${classes.poster__image} ${classes.poster__image2}`} />
    
    </div>
  )
}

export default Mintingbanner