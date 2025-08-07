import {styled} from 'styled-components'
import heroImg from '../../assets/img/hero-img.png'

// Use to apply media queries
const HeroWrapper = styled.section`
    & .hero-content{
        padding: 0rem 6.2rem;
    }

`

const HeroButton = styled.a`
    text-decoration:none;
    padding: 1.2rem 4.8rem;
    background-color: #ffd43b;
    border-radius: 80px;
    margin-top: 4.8rem;
    animation: Shadow 2s infinite;
    transition: all 600ms;

    &:hover, &:active{
        background-color:#f1f3f5;
    }

    & p{
        color:#4A401D;
    }

    @keyframes Shadow {
        0%{
            box-shadow: 0 0 0 #ffea9d83;
        }50%{
            box-shadow: 0 0 20px #ffea9d83;
        }
        }100%{
            box-shadow: 0 0 0px #ffea9d83;
        }
}
`

const HeroImg = styled.img`
    width:30rem;
    filter: grayscale(100%);
    opacity: .8;
`

export default function HeroSection(){
    return (
        <HeroWrapper className='section-hero container '>
            <div className="hero-content grid grid--1-col">
                <h1 className="heading-primary">Mude sua mentalidade <br />e transforme sua realidade financeira</h1>
                <p className="heading-description">A forma como você pensa sobre dinheiro define o quanto você terá." Aqui cada frase é uma semente de riqueza plantada na sua mente.</p>
               <HeroButton href='#'>
                    <p>Explore &darr;</p>
               </HeroButton>
               <HeroImg src={heroImg} alt="hand grabbing money" />
            </div>
        </HeroWrapper>
    )
}