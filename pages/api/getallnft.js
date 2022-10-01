//import Moralis from 'moralis';
//import  Moralis  from 'moralis/node';
import axios from 'axios'

export default async function handler(req, res) {
  // console.log(req.body)

    if(req.method==='POST'){
  
    try {
      
        const address = req.body.address;
       // console.log("add",address)
        //const chain= "5777";
        const chain= "bsc testnet";
        //const chain= 'bsc';
        let nftsData=[];

         await axios.get(`https://deep-index.moralis.io/api/v2/${address}/nft?chain=bsc%20testnet&format=decimal`,
         {
            headers:{
                accept:"application/json",
                "X-API-Key":"dOmygySd2aaSVl4CzyQNluv62slJ8aKH2FXRREuWfwOzpataFhisQSbrfJjOfEwU",
            },
         }).then (async (res)=>{
           //console.log("kku",res.data.result)
            for(let i=0;i<res.data.result.length;i++){
                //console.log(i)
             
                const  contractaddress=res.data.result[i].token_address;
                const  tokenid=res.data.result[i].token_id;
                const tkuri=res.data.result[i].token_uri;
                const meta=JSON.parse(res.data.result[i].metadata);
              
               // console.log("kk",tkuri.slice(-4))
               if(tkuri!==null){
               if(tkuri.substring(0,5)==="https" && tkuri.slice(-4)==="json"){
                  //console.log("true",tkuri)
                  await axios.get(tkuri).then(resp=>{ resp.data.contractaddress=contractaddress;resp.data.tokenid=tokenid; {nftsData.push(resp.data);}})
               } else if (tkuri.substring(0,5)==="https" && tkuri.slice(-4)!=="json"){
                 const selfminted={
                  "name":meta.name,
                  "description":meta.description,
                  "image":meta.image,
                  "contractaddress":contractaddress,
                  "tokenid":tokenid
                 }
                 nftsData.push(selfminted)
               }
            }
                   
          } 
          //console.log(nftsData)

        }
          
           
         ) 

         res.status(200).json({
            allNft: nftsData
          });
          
      
} 
   catch (err) {
        res.status(500).json({ message: err.message});
   }
}
}
