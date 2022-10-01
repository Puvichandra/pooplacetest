
import classes from '../banner/banner.module.css';
import styles from '../../styles/containerstyle.module.css';
import style from '../mintingbanner/mintingbanner.module.css';
import pic from "../../public/img/final.png";
import Image from 'next/image';


const Banner = () => {
  return (

    
    <div className= { `${classes.banner} ${style.banner__size} ${styles.container}`}>
    
     <div className={classes.banner__wrapper}>
      <div className={classes.wrapper__content}>

      <h1>Create your own NFTs</h1>
      <h2>Discover , collect and</h2>
      <h2>and sell them too</h2>
      </div>
      {/* <div className={classes.image__poster}> */}
      {/* <img src={pic} alt="nft"  /> */}
      <img src="/img/final.png"   alt="nft" className={` ${classes.poster__nft} ${style.poster__image2}`} />
      {/* <img src="img/final.png" alt="nft" className={classes.poster__nft} /> */}
      </div>
     {/* </div> */}
    </div>
  )


 

}

export default Banner