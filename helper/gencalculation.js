
export function calcultateRewards(pooprice,totSupply,totalAward,totminted,bnbprice) {

    
    if(pooprice  && totSupply){
    //let inp= document.getElementById("bnb").value
    const weiToBnb=totalAward/1000000000000000000
    //console.log(bnbprice);
    //const weiusd=0.000000000000001900000
    const totpoo=((weiToBnb * bnbprice)/pooprice).toFixed(0)

    
    if(totminted>0 && totminted<601){
         return ((totpoo/100)*5);
     } else if (totminted>600 && totminted<1201) {
         return ((totpoo/100)*10);  
    } else if (totminted>1200 && totminted<1601) {
        return ((totpoo/100)*15);
     
    } else if (totminted>1600 && totminted<2201 ) {
      return ((totpoo/100)*10);
       
    }else if (totminted>2200 && totminted<2801 ) {
      return ((totpoo/100)*15);
       
    } else if (totminted>2800 && totminted<3401){
       return ((totpoo/100)*15);
      
    } else if (totminted>3400 && totminted<3601){
      return ((totpoo/100)*15);
      
    }else if (totminted>3600 && totminted<=4000){
      return ((totpoo/100)*15);
      
      } else {
        return 0;
    }
    }   
   
}