
import {useEffect} from 'react'
import GetLastblock from './component/GetLastblock';
import GetBalance from './component/GetBalance';

function App() {
  useEffect(()=>{
    
  //  alchemy.core.getTokenBalances(
  //    ownerAddress,
  //    tokenContractAddresses
  //  ).then((d)=>{console.log(`@@@@@@@@@@`);
  //console.log(d)
  //})
  },[])
  return (
    <div >
      <GetLastblock/>
      <GetBalance/>
     
    </div>
  );
}

export default App;

