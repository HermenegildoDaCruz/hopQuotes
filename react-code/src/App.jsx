import HeroSection from "./components/HeroSection/HeroSection"
import Phrases from "./components/Quotes/Quotes"
import { QUOTES } from "./data"
import { useState } from "react"

function App() {
  const [pageNumber, setPageNumber] = useState(1)
  
  let heroSection
  let phrases

  if (pageNumber === 1){
    heroSection = (
      <HeroSection 
        headingText={<>Mude sua mentalidade e<br /> transforme sua realidade financeira</>} 
        headingDescription="A forma como você pensa sobre dinheiro define o quanto você terá. Aqui cada frase é uma semente de riqueza plantada na sua mente."/>
    )
    phrases = <Phrases list={QUOTES} pageNumber={pageNumber}></Phrases>
  }

  return (
    <>
      <main>
        {heroSection}
        {phrases}
      </main>
    </>
  )
}

export default App
