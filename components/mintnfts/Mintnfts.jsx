import {ethers} from 'ethers'
import {useState} from 'react'
import Web3Modal from 'web3modal'
import {create as ipfsClient} from 'ipfs-http-client'
//import { nftaddress, nftmarketaddress } from '../config'
import mintNFT from '../../contracts/selfmint.json'
import {useRouter} from 'next/router'
import Topnav from '../topnav/topnav'

//import KBMarket from '../artifacts/contracts/KBMarket.sol/KBMarket.json'

// in this component we set the ipfs up to host our nft data of
// file storage 


const projectId = '2DAQVtM9ZQDAkSK1QLz5reF6aZJ';   // <---------- your Infura Project ID

const projectSecret = 'd67e543c667ef5ce93ae3ea2cbdb3472';  // <---------- your Infura Secret
// (for security concerns, consider saving these values in .env files)

const auth = 'Basic ' + Buffer.from(projectId + ':' + projectSecret).toString('base64');

const client = ipfsClient({
    host: 'ipfs.infura.io',
    port: 5001,
    protocol: 'https',
    headers: {
        authorization: auth,
    },
});


export default function MintItem(props) {
  const [fileUrl, setFileUrl] = useState(null)
  const [formInput, updateFormInput] = useState({price: '', name:'',
description:''})
  const router = useRouter()


  // set up a function to fireoff when we update files in our form - we can add our 
  // NFT images - IPFS

  async function onChange(e) {
      const file = e.target.files[0]
      try {
      const added = await client.add(
          file, {
              progress: (prog) => console.log(`received: ${prog}`)
          })
      const url = `https://infura-ipfs.io/ipfs/${added.path}`
      setFileUrl(url)
      //console.log(url)
      } catch (error) {
          console.log('Error uploading file:', error)
      }
  }



  async function createMarket() {
      const {name, description, price} = formInput 
      if(!name || !description || !price || !fileUrl) return 
      // upload to IPFS
      const data = JSON.stringify({
          name, description, image: fileUrl
      })
      try {
          const added = await client.add(data)
          const url = `https://infura-ipfs.io/ipfs/${added.path}`
          // run a function that creates sale and passes in the url 
          createSale(url)
          } catch (error) {
              console.log('Error uploading file:', error)
          }
  }

  async function createSale(url) {
      // create the items and list them on the marketplace
     
      // we want to create the token
      let contract = new ethers.Contract(process.env.NEXT_PUBLIC_MINT_CONTRACT, mintNFT, props.ssigner)
      let transaction = await contract.mintToken(url)
      let tx = await transaction.wait()
      console.log(tx)
     // router.push('./mynft')
      // let event = tx.events[0]
      // let value = event.args[2]
      // let tokenId = value.toNumber()
      // const price = ethers.utils.parseUnits(formInput.price, 'ether')
      
      // // list the item for sale on the marketplace 
      // contract = new ethers.Contract(nftmarketaddress, KBMarket.abi, signer)
      // let listingPrice = await contract.getListingPrice()
      // listingPrice = listingPrice.toString()

      // transaction = await contract.makeMarketItem(nftaddress, tokenId, price, {value: listingPrice})
      // await transaction.wait()
      // router.push('./')
  }

  return (
    <div style={{display: `${props.display}`}}>
    <Topnav  address={props.address} connect={props.connect}  walletdiscon={props.walletdiscon}  walletswitch={props.walletswitch}/>
      <div className='flex justify-center'>
          <div className='w-2/2 flex flex-col pb-12'>
              <input
              placeholder='Asset Name'
              className='mt-8 border rounded p-4 text-black'
              onChange={ e => updateFormInput({...formInput, name: e.target.value})} 
              />
              <textarea
              placeholder='Asset Description'
              className='mt-2 border rounded p-4 text-black'
              onChange={ e => updateFormInput({...formInput, description: e.target.value})} 
              />
              <input
              placeholder='Asset Price in Eth'
              className='mt-2 border rounded p-4 text-black'
              onChange={ e => updateFormInput({...formInput, price: e.target.value})} 
              />
              <input
              type='file'
              name='Asset'
              className='mt-4 text-black'
              onChange={onChange} 
              /> {
              fileUrl && (
                  <img className='rounded mt-4' width='350px' src={fileUrl} />
              )}
              <button onClick={createMarket}
              className='font-bold mt-4 bg-purple-500 text-white rounded p-4 shadow-lg'
              >
                  Mint NFT
              </button>
          </div>
      </div>
      </div>
  )

}