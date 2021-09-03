import {Container} from './styled'
import Welcome from '../welcome'
import Slider from '../slider'
import Message from '../message'

import Elise from '../../images/profile/Elise.png'
import Oliver from '../../images/profile/Oliver.png'

const Content = () => {
    return (
        <Container>
            <Welcome/>
            <Slider/>
            <Message 
                imageProfile={Elise}
                title={'Suche Mathe Nachhilfe'}
                text={'Ich suche nach einer Mathe Nachhilfe für meinen Sohn (8. Klasse). Hat jemand eine Empfehlung?'}
            />
            <Message 
                imageProfile={Oliver}
                title={'Garten gießen für 2 Wochen'}
                text={'Ich suche jemanden, der 2 mal innerhalb von 2 Wochen bei mir den Garten gießen könnte.'}
            />
        </Container>
    )
}

export default Content