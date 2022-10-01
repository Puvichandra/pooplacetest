
import classes from './nftcard.module.css'


const nftcard = () => {
  return (
    <div className={classes.nft__card}>
        <div className={classes.card__image}>
          <img src="img/poochain.png" alt="nFT" />
        </div>
        <div className={classes.name}>
        <h4>Poochain Genesis NFT 1</h4>

        <small className={classes.text__muted}>Poochain Genesis</small>
        </div>
        <div className={classes.nft__price}>
          <img src='img/bsc.png' alt="bnb" />
          <h4>5.4 BNB</h4>
        </div>
      </div>
  )
}

export default nftcard