import React , {useEffect, useState} from 'react'
import classes from './sidebar.module.css'
import LOGO1 from '../../public/img/white.png'
import {FaTelegramPlane} from 'react-icons/fa'
import {BsTwitter} from 'react-icons/bs'
import {BsDiscord} from 'react-icons/bs'
import {IoMdArrowDropleft} from 'react-icons/io'
import {BsShopWindow} from 'react-icons/bs'
import {AiFillPicture} from 'react-icons/ai'
import {DiAtom} from 'react-icons/di'
import {GiRadioactive} from 'react-icons/gi'
import styles from '../../styles/containerstyle.module.css';


const Sidebar = (props) => {

 const [activePage , setPage] = useState(['{classes.activeNav}','','','',''])
 const [activePageone , setPageOne] = useState(1);


  return (
    <div className= {props.isActive ? `${styles.sidebar} ${classes.active}`: `${classes.sidebar} ${classes.not__active}`}>
      <div className={classes.sidebar__wrapper} >

      
      <div className={`${styles.container} ${classes.sidebar__container}`}>
        <div className={classes.sidebar__top}>
        <IoMdArrowDropleft className={classes.close__icon} onClick={props.toggle}/>
  
        <div className={classes.logo}>
          <img src="img/white.png" alt="hh" />
        </div>


        <div className={classes.menu}>
          <h3>Menu</h3>
          <ul>
            <a  href="#" className={activePageone===1?classes.activeNav:""} onClick={()=>{setPageOne(1); props.func(['','none','none','none','none']); props.pageno(1);}} ><li><BsShopWindow className={classes.sidebar__icons} />Explore</li></a>
            <a  href="#" className={activePageone===2?classes.activeNav:""} onClick={()=>{setPageOne(2); props.func(['none','','none','none','none']); props.pageno(2);}} ><li><BsShopWindow className={classes.sidebar__icons} />Mint NFTs</li></a>
            <a  href="#" className={activePageone===3?classes.activeNav:""} onClick={()=>{setPageOne(3); props.func(['none','none','','none','none']); props.pageno(3);}} ><li><BsShopWindow className={classes.sidebar__icons} />My NFTs</li></a>
            <a href="#" className={activePageone===4?classes.activeNav:""} onClick={()=>{setPageOne(4);props.func(['none','none','none','','none']);props.pageno(4);}}><li><DiAtom className={classes.sidebar__icons}  />PooGrow Genesis Mint</li></a>
            <a  href="#" className={activePageone===5?classes.activeNav:""} onClick={()=>{setPageOne(5); props.func(['none','none','none','none','']);props.pageno(5);}} ><li><GiRadioactive className={classes.sidebar__icons} />PooGrow Mini Mint</li></a>
            {/* <a href="#" className='active'><li><MdOutlineExplore className='sidebar__icons' />Explore</li></a> */}
            {/* <a href="#"><li><BsCardChecklist className='sidebar__icons' />Listing</li></a> */}
            {/* <a href="#"><li><MdOutlineCollections className='sidebar__icons' />Collection</li></a> */}
            {/* <a href="#"><li><BiDiamond className='sidebar__icons' />Active Bids</li></a> */}
            {/* <a href="#"><li><RiDashboardFill className='sidebar__icons' />My NFTs</li></a> */}
          </ul>
          
        </div>
        </div>


        <div className={classes.socials}>
          <h3>Socials</h3>
          <div className={classes.social__icons}>
            <a href="https://t.me/PooChainPortal" target='_blank' rel="noreferrer noopener">

    <FaTelegramPlane className={classes.sidebar__icons} />
            </a>
            <a href="https://twitter.com/poo_chain" target='_blank' rel="noreferrer noopener">

    <BsTwitter className={classes.sidebar__icons} />
            </a>
            {/* <a href="#">

    <BsDiscord className={classes.sidebar__icons} />
            </a> */}
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Sidebar