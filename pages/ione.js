import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { BigNumber, ethers } from "ethers";
import Web3Modal from "web3modal";
import {CoinbaseWalletSDK} from '@coinbase/wallet-sdk';
import WalletConnectProvider from "@walletconnect/web3-provider";
import { useEffect, useState } from 'react';
import NFT from "../contracts/NFT.json";
import Button from '../components/ui/button';




function Home() {

const [web3provider,setWeb3Provider] = useState();
const nftAddress='0x3659B250Cfb5B83cfA00A869b6F816239BC9BF81';
const abi=NFT.abi;
const [address, setAddress] = useState('');
const [nftPrice, setNftPrice]=useState(0);
const [totSupply,setTotalSupply] = useState(0);
const [totminted,setTotalMinted] = useState(0);
const [balance, setBalance] = useState(0);
const  [issalestarted, setSaleStarted] =useState(false);
const [tokenContract,settTokenContract] = useState()
const [nftNumber, setNftNumber] = useState(0)
const [isminted, SetIsMinted] = useState(false)
//let tokenContract;
const nftCost=5000000000000000n;


const providerOptions = {
coinbasewallet:{
  package: CoinbaseWalletSDK, // required
  options: {
    infuraId: "https://mainnet.infura.io/v3/15815d1994034948be9fcc1effff2be7" // required
  }
} ,

walletconnect: {
  package: WalletConnectProvider, // required
  options: {
    infuraId: "https://mainnet.infura.io/v3/15815d1994034948be9fcc1effff2be7" // required
  }
}
};


// useEffect(()=>{
//  document.getElementById("sale").innerHTML= "Sale Started: " + issalestarted;
// },[issalestarted])

// useEffect(()=>{
//   if(web3provider){
//     alert(web3provider.selectedAddress)
//   }
  
//  },[web3provider])

 useEffect(()=>{
  if(address){
  document.getElementById("sale").innerHTML= "Sale Started: " + issalestarted;
  document.getElementById("totsupply").innerHTML= "Total Supply:" + totSupply;
  document.getElementById("tmint").innerHTML= "Total Minted:" + totminted;
  setBalance(Number(totSupply)-Number(totminted))
  document.getElementById("balance").innerHTML= "Balance NFT:" + balance;
    // document.getElementById("price").innerHTML= "Price:" + nftPrice;
  }
 },[totminted])


 useEffect(()=>{
  setBalance(Number(totSupply)-Number(totminted))
  if(address){
    document.getElementById("balance").innerHTML= "Balance NFT:" + balance;
  }
  },[balance])
 

 useEffect( ()=>{
  getTokensIds();  
 },[address,isminted])

 useEffect( ()=>{
  
  if(nftNumber>0){
    
    document.getElementById("price").innerHTML="Price : " + Number(nftPrice/10000000000000000n)/100 + " BNB"
  }
 
 },[nftNumber])





 const getTokensIds= async ()=>{
  if(address){
    
   setSaleStarted(await tokenContract.hasSaleStarted());
   setTotalSupply(await tokenContract.MAX_PoochainClub());
   setTotalMinted(await tokenContract.totalSupply())
    // const signer=web3provider.getSigner();
    // tokenContract = new ethers.Contract(nftAddress,abi,signer)
    //alert(await tokenContract.tokensOfOwner(address))
  }
 }




async function connectwallet(){
  try{
    let web3Modal = new Web3Modal({
      //network: "mainnet", // optional
      cacheProvider: false, // optional
      providerOptions // required
    });
    const instance = await web3Modal.connect();
   
    const provider = new ethers.providers.Web3Provider(instance);
    
    if(provider){
      setWeb3Provider(provider);
      setAddress(provider.provider.selectedAddress)
    }
   
    const signer = provider.getSigner();
    
    //tokenContract = new ethers.Contract(nftAddress,abi,signer)
    settTokenContract(new ethers.Contract(nftAddress,abi,signer));
   //check sale started 
  
 
   //let tokenids=await tokenContract.tokensOfOwner(provider.provider.selectedAddress)


//  const transaction=await tokenContract.mintPooChainClub(1)
//   const transactionReceipt = await transaction.wait();
//     console.log(transactionReceipt.status);
//   if (transactionReceipt.status !== 1) {
//     alert('error message');
//     return;}
  


  }catch(err) {
    console.error(err);
  }
}


async function minttoken(){
 
  if(nftNumber<=0){
   alert("Please Enter positive number" );
   return;
  } else if (nftNumber>20){
    alert("Please Enter numbers between 0 to 20" );
    return;
  }
  


  try{
  // const feedata=await web3provider.getGasPrice()
  // console.log(feedata)
  // const gfeedata=await web3provider.estimatedGas(tokenContract.mintPooChainClub(nftNumber, {gasLimit: 50000},{value:nftPrice}))
  // console.log(gfeedata)
    const transaction=await tokenContract.mintPooChainClub(nftNumber,{value: nftPrice})
    const transactionReceipt = await transaction.wait();
    SetIsMinted(true)
    //console.log(transactionReceipt.status);
  if (transactionReceipt.status !== 1) {
    alert('error message');
    return;}
  } catch(err) {
    try{
      alert(err.data.message);
    } catch (err){
      console.log(err);
    }
    console.log(err)
    return;
  }
 
  
}


// const provider = new ethers.providers.Web3Provider(instance);
// const signer = provider.getSigner();




  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

<div className='w-screen h-screen  bg-slate-500 text-white  '>
<div className='px-auto pt-5 '>
{web3provider==null?(<Button onClick={connectwallet}> Connect to Wallet </Button>): 
(<div> Connected to Address {web3provider.provider.selectedAddress}</div>)} 


{address? 
<div>
<div id="sale"> {issalestarted}</div>
<div id="totsupply"> 0</div> 
<div id="tmint">Total Minted::0</div>
<div id="balance">Balance NFT :0</div>
<div id="price"> Price: 0 </div>
<label>  Number of NFT</label>

<input  className="text-black text-center" type="number"  onChange={(e)=>{setNftNumber(e.target.value);
setNftPrice(nftCost*BigInt(e.target.value));
 }} ></input>

 
<div>
      <button onClick={minttoken}> Mint</button>
    </div> </div> : ''}
   
</div>
</div>

 
{/* <div>Total minted:{totminted}</div> */}
{/* <div>balance token:{balance}</div>  */}
   
    </div>

    
  )
}

export default Home;
