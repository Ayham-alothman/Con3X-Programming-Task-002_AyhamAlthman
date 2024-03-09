import GetBalance from '../component/GetBalance';
import { screen,render } from "@testing-library/react";

test('try test',()=>{
    render(<GetBalance/>);
    const button=screen.getByTestId('btn1');
    expect(button).toBeInTheDocument();

    
    
})