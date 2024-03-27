import React, { useEffect, useState } from 'react';
import './App.css';
import { json } from 'stream/consumers';

const App:React.FC=()=>{

  interface jsonlist{
    "userId":number,
    "title":string
  }
  const[list,setList]=useState<jsonlist[]>([])

  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res:Response)=>{
      return res.json()
    })
    .then((res:any[])=>{
      const list1:jsonlist[]=res.map((ind:any)=>{
          return {"userId":ind["userId"],"title":ind["title"]}
        }
        )
        setList(list1)
    })
    .catch((err:Error)=>{
      console.error(err)
    })
  },[])
 
  return(
    <>
    <div className='App'>Hello World</div>
    <ul>
      {list.length>0?(
        list.map((lis:jsonlist)=>(
          <li key={lis.userId}>{lis.title}</li>
        ))
      ):"No items found"}
    </ul>
    </>
  );
}
 


export default App;
