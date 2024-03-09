
import {useEffect,useState} from 'react'
import { createPublicClient, http ,formatEther} from 'viem';

import { mainnet } from 'viem/chains';
const client = createPublicClient({
    chain: mainnet,
    transport: http(),
  });
  
const GetLastblock=()=>{
     let [lastBlock,setlastBlock]=useState('');

    useEffect(()=>{
      client.getBlockNumber().then((d)=>{console.log( d);
        setlastBlock(d.toString())})
    },[])
    
    return(<>
    <p className='my-10'>last block number of Ethereum mainnet :{lastBlock}</p>
    
    </>)
}

export default GetLastblock;