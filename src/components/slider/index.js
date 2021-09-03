import {Container, Title, Items, GruppenItem, AngeboteItem, SucheItem, EinkaufeItem} from './styled'

const Slider = () => {
    return (
        <Container>
            <Title>
                Erkunden
            </Title>
            <Items>
                <GruppenItem><div></div><p>Gruppen</p></GruppenItem>
                <AngeboteItem><div></div><p>Angebote</p></AngeboteItem>
                <SucheItem><div></div><p>Suche</p></SucheItem>
                <EinkaufeItem><div></div><p>Einkäufe</p></EinkaufeItem>
            </Items>
        </Container>
    )
}

export default Slider