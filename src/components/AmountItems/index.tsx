import { Minus, Plus } from "@phosphor-icons/react"
import * as C from "./styles"
import { useState } from "react"

export function AmountItems() {

const [numberItems, setNumberItems] = useState<number>(1)


function increseNumberItems() {
  setNumberItems((state) => state + 1 )
}

function decreaseNumberItems() {

  if(numberItems > 1) {
    setNumberItems((state) => state - 1 )
  }
  
}


  return (
    <C.Main>
      <C.IconMinus onClick={decreaseNumberItems} disabled={numberItems === 1}>
        <Minus weight="bold"/>
      </C.IconMinus>
      <span>{numberItems}</span>
      <C.IconPlus onClick={increseNumberItems}>
        <Plus weight="bold"/>
      </C.IconPlus>
    </C.Main>
  )
}