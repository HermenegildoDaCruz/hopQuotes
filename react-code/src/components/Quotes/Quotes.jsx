import styled from "styled-components"


// Apply media query here in this component
const PhrasesWrapper = styled.section`

`

{/* 
    Future updating:
    1.Add button to store favorite quotes 
    2. Configure prop quote (Quote component) to receive quote object to store in localstorage when a button is clicked
    
*/}

function Quote({quoteText, pageNumber, index}){ 
    let content
    if (pageNumber === 1){
        content = (
        <div className="quote">
            <blockquote>
                " {quoteText} "
            </blockquote>
        </div>
    )
    }else{
        content = (
        <div className="quote">
            <span>Arquivo nº {index + 1}</span>
            <blockquote>
                {quoteText} 
            </blockquote>
        </div>
    )
    }
    return (
        <>
            {content}
        </>
    )
}


export default function Phrases ({list, pageNumber}){
    return (
        <PhrasesWrapper className="section-quotes container" id="phrases">
        {list.map((item, itemIndex) => <Quote key={item.id} quoteText={item.text} pageNumber={pageNumber} index={itemIndex}/>)}
        </PhrasesWrapper>
    )
}