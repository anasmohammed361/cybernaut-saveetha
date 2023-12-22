// import {Button} from '@material-tailwind/react'
// import { doc } from 'firebase/firestore'
// import {useDocumentData} from 'react-firebase-hooks/firestore'
// import { db } from './lib/firebase'
import { Button } from "@material-tailwind/react";
import { Input } from "@material-tailwind/react";
import { useState } from "react";
function App() {
  // let [value, loading] =  useDocumentData(doc(db,"todo_collection","todo_document"))
  // if (loading) {
  //   return <p> loading... </p>
  // }
  const [input,setInput] = useState("")
  const handleInput = function(event) {
    // 
  }
  return (
    <div>
   
      <div className="flex justify-center items-center w-full min-h-screen">
        <div className="flex flex-col gap-4">
          <h1 className="text-center text-4xl">HEADING</h1>
          <div className="w-72">
            <Input label="your notes" value={input} />
          </div>
          <Button>Add</Button>
          {/* {value.todos.map((elem,i)=>{
           return  <li key={i}>elem</li>
          })} */}
        </div>
      </div>
    </div>
  )
}

export default App
