import HeroSection from "./components/HeroSection/HeroSection"
import Phrases from "./components/Quotes/Quotes"
import Menu from "./components/Menu/Menu"
import { QUOTES, SUCCESS_FILES } from "./data"
import { useState } from "react"

function App() {
  const [pageNumber, setPageNumber] = useState(1)
  
  function togglePageNumber(){
    if (pageNumber === 1){
      setPageNumber(2)
    }else{
      setPageNumber(1)
    }
  }
  
  let heroSection
  let phrases

  if (pageNumber === 1){
    heroSection = (
      <HeroSection 
        headingText={<>Mude sua mentalidade e<br /> transforme sua realidade financeira</>} 
        headingDescription="A forma como você pensa sobre dinheiro define o quanto você terá. Aqui cada frase é uma semente de riqueza plantada na sua mente."/>
    )

    phrases = <Phrases list={QUOTES} pageNumber={pageNumber}></Phrases>
  }else{
    heroSection = (
      <HeroSection 
        headingText={<>Reprograme sua mente com esses 17 arquivos <br /> para ter sucesso financeiro  </>} 
        headingDescription={<>Mude o seu conceito sobre dinheiro para ter sucesso financeiro, reprograme seu cerébro com essas verdades  &darr;</>}/>
        
    )
    
    phrases = <Phrases list={SUCCESS_FILES} pageNumber={pageNumber}></Phrases>
  }

  return (
    <>
      <header>
          <Menu togglePageNumber = {togglePageNumber} pageNumber={pageNumber}></Menu>
      </header>
      <main>
        {heroSection}
        {phrases}
      </main>
    </>
  )
}

export default App
