import styled from "styled-components"


// Apply media query here in this component
const PhrasesWrapper = styled.section`

`

{/* 
    Future updating:
    1.Add button to store favorite quotes 
    2. Configure prop quote (Quote component) to receive quote object to store in localstorage when a button is clicked
    
*/}

function Quote({quoteText, pageNumber}){ 

    let content
    if (pageNumber === 1){
        content = (
        <div className="quote">
            <blockquote>" {quoteText} "</blockquote>
        </div>
    )
    }
    // if pageNumber === 2 use the same structure adding (<span>Arquivo n 12</span>) para os arquivos de sucesso
    return (
        <>
            {content}
        </>
    )
}


export default function Phrases ({list, pageNumber}){
    return (
        <PhrasesWrapper className="section-quotes container">
        {list.map((quote) => <Quote key={quote.id} quoteText={quote.text} pageNumber={pageNumber}/>)}
        </PhrasesWrapper>
    )
}