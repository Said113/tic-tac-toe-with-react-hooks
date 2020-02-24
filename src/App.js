import React, {useState} from 'react';
import Res from "./Res";
import {Game} from "./game";



const App = () => {
 
  const [btn,setbtn] = useState(Array(9).fill(null));
  const [x,setx]     = useState(true);


  const win      = Game(btn);
  const winner   = win.winner;
  
  let player ;
  if(winner){
      player = "the winner is " + winner;
  }else{
      player = "the player is : " + (x ? "X" : "O");
    }

  function buttons (i){
    return (
      <Res onclick = { () => {
          btn[i] = x ? "O" : "X";
          setx(!x);
          setbtn(btn);
      }}
      num={btn[i]}
      r={btn}
    />
    
    )
  }

  return(
    <div>
      <h1>{player}</h1>
      <div>
        {buttons(0)}
        {buttons(1)}
        {buttons(2)}
      </div>

      <div>
        {buttons(3)}
        {buttons(4)}
        {buttons(5)}
      </div>

      <div>
        {buttons(6)}
        {buttons(7)}
        {buttons(8)}
      </div>

    </div>

  )
  
}
export default App;
