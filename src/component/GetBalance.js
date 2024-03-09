import {useState,useEffect} from 'react'
import { createPublicClient, http ,formatEther} from 'viem';
import { mainnet } from 'viem/chains';
const client = createPublicClient({
    chain: mainnet,
    transport: http(),
  });
  

const GetBalance=()=>{
    let [Balance,SetBalance]=useState('');
    let [address,Setaddress]=useState('');
    let [Erorr,SetErorr]=useState('');
    
    
      const getBalance=(addres)=>{
      client.getBalance({address:addres})
      .then((d)=>{
        SetBalance(formatEther(d));
        SetErorr('')
      })
      .catch(()=>{
        SetErorr('invalid addres')
        SetBalance('')
      })
    }

    return(<>
    <p>Set address :</p>
    <input className="border-4" type="text" onChange={(e)=>{e.preventDefault();
    Setaddress(e.target.value)}} ></input>
    <button data-testid={'btn1'} className="border-4" onClick={()=>{getBalance(address)}}>getBalance</button>
    <p>{Balance} </p>
    <p>{Erorr} </p>
    </>)
}


export default GetBalance;