import React, { useState } from 'react'

const Events = () => {
  //  let info = "EVENTS"
  //* Hook Kullanim Kurallari:
//* 1. İlk olarak import edilmedlir. import { useState } from "react";
//* 2. Hook'lar ust seviyede kullanilmalidir. Yani Hook'lar bir
//*    dongunun, kosul cumleciginin ve icice fonksiyonlarin icerisinde
//*    kullanilmamalidir.
//* 3. Hook'lar sadece React Fonksiyonel componentleri icerisinde cagrilmalidir.
//*    Normal Javascript fonksiyonlari icerisinde cagrilmamalidir
//*    (Custom hook'lar icerisinde bir hook cagrilabilir)
 const [info,setInfo] = useState("events")

 const handleClick = () => {
  alert("tıkla çalıştı")
 }

 const handleChange = ()=> {
  console.log("change")
  setInfo("olay")
// info="olay"
 }
  return (
    <div>
      <div>
{info}
     </div>
     <button onClick={()=> console.log("tıklandı")}>Click</button>
     <button onClick={handleClick}>Tıkla</button>
     <button onClick={handleChange}>change</button>
    </div>
  )
}

export default Events