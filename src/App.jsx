import { useState } from 'react'
import QuoteBox from "./components/QuoteBox"
import quoteDB from "./db/quotes.json"
import colors from "./db/colors.js"
import QuoteButton from './components/QuoteButton'



function App() {
  const getRandom = (arr) => {
    const randomPhrase = Math.floor(arr.length*Math.random())
    return arr[randomPhrase]
  }

  const [quotes, setQuote] =useState(getRandom(quoteDB))
  const [color, setColor] =useState(getRandom(colors))

  const getNewValues = () => {
    const newQuote = getRandom(quoteDB)
    const newColor = getRandom (colors)
    setQuote(newQuote)
    setColor(newColor)
  }
  const BackObj = {
    backgroundColor:color
  }
  const colorObj={
    color: color
  }



  return (
    <div className="App" style={BackObj}>
      <QuoteBox quote={quotes}
      getNewValues={getNewValues} 
      BackObj={BackObj}
      colorObj={colorObj}>


      </QuoteBox>
      
    </div>
  )
}

export default App
