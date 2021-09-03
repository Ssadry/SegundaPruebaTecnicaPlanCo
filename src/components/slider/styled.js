import styled from 'styled-components'
import Gruppen from '../../images/slider/Gruppen.png'
import Angebote from '../../images/slider/Angebote.png'
import Suche from '../../images/slider/Suche.png'
import Einkaufe from '../../images/slider/Einkaufe.png'

export const Container = styled.div`
    margin-bottom: 36px;
`

export const Title = styled.h3`
    width: 68px;
    height: 22px;

    font-size: 17px;
    font-weight: normal;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

    color: #3C3C43;
    opacity: 60%;

    margin-left: 21px;
    margin-top: 8px;
`
export const Items = styled.div`
    width: 331px;
    height: 92px;

    display: flex;

    margin-left: 21px;
`

const Item = styled.div`
    width: 70px;

    display: flex;
    flex-direction: column;

    margin-top: 2px;
    margin-right: 15px;

    div {
        width: 100%;
        height: 70px;

        border-radius: 50%;

        border: 1px solid #C4C4C4;

        background-repeat: no-repeat;
        background-position: center;
    }

    p {
        margin-top: 6px;
        text-align: center;
        font-size: 10px;
        font-weight: normal;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        word-spacing: 0.12px;
        color: #747D82;
    }
`

export const GruppenItem = styled(Item)`
    div {
        background-image: url(${Gruppen});
        background-size: 40px 24.35px;
    }
`

export const AngeboteItem = styled(Item)`
    div {
        background-image: url(${Angebote});
        background-size: 40px 31.12px;    
    }
`

export const SucheItem = styled(Item)`
    div {
        background-image: url(${Suche});
        background-size: 27px 30px;    
    }
`

export const EinkaufeItem = styled(Item)`
    div {
        background-image: url(${Einkaufe});
        background-size: 35px 27.32px;   
    }
`