//import Moralis from 'moralis';


export default async function handler(req, res) {
   

    if(req.method==='POST'){
      
   
     try {
        let abidata;
        // const caddress='0xC169Fa886431c36210f74b3b7F0ABa0FD0e16759'
         const caddress=req.body.contractaddress;
         
         const bscapiKey="YEGQGAREV2JA11NM3IKQTUQENBSUDYZ33V"
         const apiUrl=`https://api-testnet.bscscan.com/api?module=contract&action=getabi&address=${caddress}&apikey=${bscapiKey}`
        //const apiUrl=`https://api.bscscan.com/api?module=contract&action=getabi&address=${caddress}&apikey=${bscapiKey}`
         //console.log(apiUrl)
         await fetch(apiUrl).then((res)=>res.json()).then((data)=>{abidata=data.result})
     
         res.status(200).json({
             
             abiData: abidata
           });
     
 }
    catch (err) {
         res.status(500).json({ message: "some error"});
     }
 }
 }
 