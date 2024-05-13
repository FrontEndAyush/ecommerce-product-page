import Navbar from "./components/Navbar";
import Card from "./components/Card";
import { useState } from "react";

function App() {
  
  let [counter, setCounter] = useState(0);
  let [cartShow, setCartShow] = useState(false);
  let [cartItemShow, setCartItemShow] = useState(false);
  return (
    <>
      <Navbar cartShow={cartShow} counter= {counter} setCartShow={setCartShow}></Navbar>
      <Card cartShow={cartShow} setCartShow = {setCartShow} cartItemShow = {cartItemShow} counter={counter} setCounter={setCounter} setCartItemShow = {setCartItemShow}></Card>
    </>
  );
}

export default App;
