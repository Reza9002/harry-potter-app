import Colors from 'open-props/src/colors';
import React, { useEffect, useState } from 'react'

export default function EffectDemo() {

const [show,setShow] = useState(false);
const [number,setNumber] = useState(8);
const[color,setColor] = useState('#f25f4c');

  return (
    <div>
<button onClick={()=>setShow(!show)} >   {show ? 'Hide' : 'Show'}     </button>

<div>
    <input type="range" min={0} max={10}
     value={number} onChange={(e)=>setNumber(parseInt(e.target.value))}
     />
<div>{number}</div>



<div>
    <input type="color" value={color} onChange={e=>setColor(e.target.value)} />
</div>

</div>
{show && <Effects color={color}/>}
    </div>
  );
}




function Effects({color}) {

    const[timeString , setTimeString] = useState('');
    useEffect(()=>console.log('Effekt'));

    useEffect(()=>console.log('komponente nur 1 mal gerendert'),[]);
    useEffect(()=>console.log(`Farbe hat sich geändert : ${color}`),[color]);

    useEffect(()=>{
      const intervalId =  setInterval(() => {
            console.log('neu Zeit');
            
            setTimeString(new Date().toLocaleTimeString());
        }, 1000);

    return()=>{
        console.log('Komponente wurde entfernt.Aufräumen!!!');
        clearInterval(intervalId);
        
    };
},[]);

   

    return( 
    <h2 style={{color}}>Effekt
    <time>{timeString}</time>
    </h2>


)
}