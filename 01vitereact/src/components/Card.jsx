import { useState } from "react"

export default function BgChange(){
   let[color,setColor] = useState('');

   let changeColor = ()=>{
        let green = Math.round(Math.random()*255);
        let red = Math.round(Math.random()*255);
        let blue= Math.round(Math.random()*255);

        color = `rgb(${red}, ${green}, ${blue})`
        setColor(
            document.body.style.backgroundColor = color
        );

   }
    return(
        <>
        <h1>{color}</h1>
        <button onClick={changeColor}>Click Me</button>
        </>
       
    )
}