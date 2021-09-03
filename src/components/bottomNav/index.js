import {Container, Top, Bottom, Line, CentralButton, HouseItem, BellItem, CloudItem, PersonItem} from './styled'

const BottomNav = () => {
    return (
        <Container>
            <Top>
                <HouseItem/>
                <BellItem/>
                <CentralButton/>
                <CloudItem/>
                <PersonItem/>
            </Top>
            <Bottom>
                <Line/>
            </Bottom>
        </Container>
    )
}

export default BottomNav