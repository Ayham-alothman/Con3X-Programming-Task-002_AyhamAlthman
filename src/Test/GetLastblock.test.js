

import GetLastblock from '../component/GetLastblock'

import { screen,render } from "@testing-library/react";

test('try test',()=>{
    render(<GetLastblock/>);
    const Text=screen.getByText("last block number of Ethereum mainnet :");
    expect(Text).toBeInTheDocument();

    
    
})