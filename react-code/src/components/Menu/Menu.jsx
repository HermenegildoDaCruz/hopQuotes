import styled from "styled-components"

const MenuWrapper = styled.menu`
    display: flex;
    justify-content:center;
    align-items: center; 
    gap:.8rem;   
    margin: 1.2rem auto;
    padding:.6rem 0;
    background-color: #63696e85;
    max-width: 30rem;
    border-radius: 12px;
    list-style:none;
`

const MenuButton = styled.button`
    background-color: ${({$isActive}) => $isActive ? "#dee2e6": "transparent"};
    color: ${({$isActive}) => $isActive ? "#212529": "#dee2e6"} ;
    padding:1.2rem;
    border-radius: 12px;
    border: none;
    font-family:inherit;
    cursor: pointer;

    
` 

export default function Menu({togglePageNumber, pageNumber}){
    return (
        <MenuWrapper className="menu">
            <li>
                <MenuButton $isActive = {pageNumber === 1} onClick={togglePageNumber}>Frases</MenuButton>
            </li>
            <li>
                <MenuButton $isActive = {pageNumber === 2} onClick={togglePageNumber}>Reprograme seu cérebro</MenuButton>
            </li>
        </MenuWrapper>
    )
}