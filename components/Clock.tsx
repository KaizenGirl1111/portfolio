'use client';
import { useEffect, useState } from "react";

function Clock(){
    const [now,setNow] = useState<Date>(()=>new Date());
    useEffect(()=>{
       const t = setInterval(()=>setNow(()=>new Date()),1000)
       return ()=>clearInterval(t)
    },[])
    if (!now) return <time>--:--:--</time>; 

    const hh = String(now.getHours()).padStart(2,'0')
    const mm = String(now.getMinutes()).padStart(2,'0')
    const ss = String(now.getSeconds()).padStart(2,'0')
    return(
      <time dateTime={now.toISOString()}>{`${hh}:${mm}:${ss}`}</time>
   )
}

export default Clock;