import { useState } from "react";

export default function Click(){
const [num, setNum] = useState(0)

 function add (){
    setNum(num + 1);
 }

    return(
        <div>
            <p>count : {num}</p>
            <button onClick={add} style={{background:"purple", color:"white"}}>Click Here</button>
        </div>
    )
}