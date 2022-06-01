import React from 'react'
import {db} from './firebase'
import { collection,onSnapshot } from 'firebase/firestore';
import {useState,useEffect} from 'react';
import './App.css';

function App() {
  const [docsA,setDocsA]=useState([])
  const colRef=collection(db,"chat1");
  useEffect(()=>{
     onSnapshot(colRef).then(snapshot=>{
       setDocsA([])
       snapshot.docs.foreach(doc=>{
           setDocsA(old=>[...old,...old.data(),old.id])
       })
     })
  },[])  



  return (
    <div className="App">
     <div className="chat-array">
       { docsA.map((doc)=>{
           return(
             <div>
               {doc.content}
               </div>
           )
        })}
     </div>
     <div className="chat-area">
       <div className="chat-text">
      </div>
      <div>
      <input type="text" onChange={()=>console.log("hellow")}></input>
      <button>Send</button>
      </div>
     </div>
    </div>
  );
}

export default App;
