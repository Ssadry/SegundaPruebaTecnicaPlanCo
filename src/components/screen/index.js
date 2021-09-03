import {Container} from './styled'
import Header from '../../components/header'
import Content from '../../components/content'
import BottomNav from '../../components/bottomNav'

const Screen = () => {
    return (
        <Container>
            <Header/>
            <Content/>
            <BottomNav/>
        </Container>
    )
}

export default Screen